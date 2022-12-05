import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData';
import userEvent from '@testing-library/user-event';

describe('testa a aplicação', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(testData),
    }));
  });

  afterEach(() => {
    global.fetch.mockClear();
  })

  it('testa se a tabela é renderizada', async () => {
    render(<App />);
    const tatooineName = await screen.findByText('Tatooine');
    const coruscantName = await screen.findByText('Coruscant');
    expect(tatooineName).toBeInTheDocument();
    expect(coruscantName).toBeInTheDocument();
  });

  it('testa se o filtro de nome funciona', async () => {
    render(<App />);
    const coruscantName = await screen.findByText('Coruscant');
    const nameFilter = await screen.findByTestId('name-filter');
    userEvent.type(nameFilter, 'tooine');
    
    const tatooineName = await screen.findByText('Tatooine');
    expect(tatooineName).toBeInTheDocument();
    expect(coruscantName).not.toBeInTheDocument();
  });

  it('testa se os filtros de comparação funcionam', async () => {
    render(<App />);
    const columnName = await screen.findByTestId('column-filter');
    const valueFilter = await screen.findByTestId('value-filter');
    userEvent.selectOptions(columnName, ['orbital_period']);
    userEvent.type(valueFilter, '305');

    const buttonFilter = await screen.findByTestId('button-filter');
    userEvent.click(buttonFilter);
    const tatooineName = await screen.queryByText('Tatooine');
    expect(tatooineName).not.toBeInTheDocument();
    const coruscantName = await screen.queryByText('Coruscant');
    expect(coruscantName).toBeInTheDocument();

    const btnExcluirFiltro = await screen.findByRole('button', { name: 'Excluir filtro' });
    userEvent.click(btnExcluirFiltro);

    const comparisonFilter = await screen.findByTestId('comparison-filter');
    userEvent.selectOptions(comparisonFilter, ['menor que']);
    userEvent.click(buttonFilter);

    const tatooineName2 = await screen.queryByText('Tatooine');
    expect(tatooineName2).toBeInTheDocument();
    const coruscantName2 = await screen.queryByText('Coruscant');
    expect(coruscantName2).not.toBeInTheDocument();

    const btnExcluirFiltro2 = await screen.findByRole('button', { name: 'Excluir filtro' });
    userEvent.click(btnExcluirFiltro2);
    userEvent.selectOptions(comparisonFilter, ['igual a']);
    userEvent.clear(valueFilter);
    userEvent.type(valueFilter, '304');
    userEvent.click(buttonFilter);
    const tatooineName3 = await screen.findByText('Tatooine');
    expect(tatooineName3).toBeInTheDocument();
  });
});
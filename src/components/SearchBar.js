import { useContext, useState } from 'react';
import planetsContext from '../context/planetsContext';

export default function SearchBar() {
  const {
    setNameFilter,
    setColumnFilter,
    setComparisonFilter,
    setValueFilter,
  } = useContext(planetsContext);

  const [localColumnFilter, setLocalColumnFilter] = useState('population');
  const [localComparisonFilter, setLocalComparisonFilter] = useState('maior que');
  const [localValueFilter, setLocalValueFilter] = useState('0');

  const setGlobalState = (setFunction, value) => {
    setFunction(value);
  };

  const setLocalState = (setFunction, value) => {
    setFunction(value);
  };

  const handleClick = () => {
    setColumnFilter(localColumnFilter);
    setComparisonFilter(localComparisonFilter);
    setValueFilter(localValueFilter);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => { setGlobalState(setNameFilter, e.target.value); } }
      />

      <select
        data-testid="column-filter"
        onChange={ (e) => { setLocalState(setLocalColumnFilter, e.target.value); } }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (e) => { setLocalState(setLocalComparisonFilter, e.target.value); } }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        data-testid="value-filter"
        value={ localValueFilter }
        type="number"
        onChange={ (e) => { setLocalState(setLocalValueFilter, e.target.value); } }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

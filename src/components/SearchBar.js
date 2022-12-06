import { useContext, useEffect, useState } from 'react';
import planetsContext from '../context/planetsContext';
import FiltersList from './FiltersList';

export default function SearchBar() {
  const {
    setNameFilter,
    setColumnFilter,
    setComparisonFilter,
    setValueFilter,
    filters,
    setFilters,
    filterIndex,
    setFilterIndex,
    activeFilters,
    setActiveFilters,
    setOrder,
  } = useContext(planetsContext);

  const [localColumnFilter, setLocalColumnFilter] = useState('diameter');
  const [localComparisonFilter, setLocalComparisonFilter] = useState('maior que');
  const [localValueFilter, setLocalValueFilter] = useState('0');
  const [localOrder, setLocalOrder] = useState('ASC');
  const [localOrderColumn, setLocalOrderColumn] = useState('population');

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
    setActiveFilters({
      ...activeFilters,
      [localColumnFilter]: false,
    });

    setFilters([
      ...filters,
      {
        id: filterIndex,
        columnFilter: localColumnFilter,
        comparisonFilter: localComparisonFilter,
        valueFilter: localValueFilter,
      },
    ]);
    setFilterIndex(filterIndex + 1);
  };

  const removeAllFilters = () => {
    setFilters([]);
    setActiveFilters({
      population: true,
      orbital_period: true,
      diameter: true,
      rotation_period: true,
      surface_water: true,
    });
  };

  const ordenar = () => {
    setOrder({
      column: localOrderColumn,
      sort: localOrder,
    });
  };
  useEffect(() => {
    setLocalColumnFilter(Object.keys(activeFilters)
      .find((k) => activeFilters[k] === true));
  }, [filters, activeFilters]);

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
        value={ localColumnFilter }
      >
        { (activeFilters.population && <option>population</option>) }
        { (activeFilters.orbital_period && <option>orbital_period</option>) }
        { (activeFilters.diameter && <option>diameter</option>) }
        { (activeFilters.rotation_period && <option>rotation_period</option>) }
        { (activeFilters.surface_water && <option>surface_water</option>) }
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

      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ removeAllFilters }
      >
        REMOVER FILTROS
      </button>

      <select
        data-testid="column-sort"
        onChange={ (e) => { setLocalState(setLocalOrderColumn, e.target.value); } }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <label
        htmlFor="radioAsc"
      >
        <input
          id="radioAsc"
          type="radio"
          name="orderOrientation"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ (e) => { setLocalState(setLocalOrder, e.target.value); } }
        />
        Ascendente
      </label>

      <label
        htmlFor="radioDesc"
      >
        <input
          id="radioDesc"
          name="orderOrientation"
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ (e) => { setLocalState(setLocalOrder, e.target.value); } }
        />
        Descendente
      </label>

      <button
        type="button"
        onClick={ ordenar }
        data-testid="column-sort-button"
      >
        ORDENAR
      </button>

      <FiltersList />
    </div>
  );
}

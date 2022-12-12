import { useContext, useState } from 'react';
import planetsContext from '../context/planetsContext';

export default function OrdenationFilters() {
  const {
    setOrder,
  } = useContext(planetsContext);

  const [localOrder, setLocalOrder] = useState('ASC');
  const [localOrderColumn, setLocalOrderColumn] = useState('population');

  const setLocalState = (setFunction, value) => {
    setFunction(value);
  };

  const ordenar = () => {
    setOrder({
      column: localOrderColumn,
      sort: localOrder,
    });
  };
  return (
    <div className="filterDiv">
      <h2>Ordenação</h2>
      <div className="filterDivContent">
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
          className="yellowButton"
        >
          ORDENAR
        </button>
      </div>
    </div>
  );
}

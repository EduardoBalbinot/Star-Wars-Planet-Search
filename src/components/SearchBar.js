import { useContext } from 'react';
import planetsContext from '../context/planetsContext';
import FiltersList from './FiltersList';
import searchIcon from '../images/searchIcon.png';
import ColumnFilters from './ColumnFilters';
import OrdenationFilters from './OrdenationFilters';

export default function SearchBar() {
  const {
    setNameFilter,
  } = useContext(planetsContext);

  const setGlobalState = (setFunction, value) => {
    setFunction(value);
  };

  return (
    <div>
      <div className="nameFilterDiv">
        <input
          type="text"
          className="nameFilter"
          data-testid="name-filter"
          onChange={ (e) => { setGlobalState(setNameFilter, e.target.value); } }
        />
        <img src={ searchIcon } alt="Lupa do campo de busca" className="lupa" />
      </div>

      <div className="filtersContainer">
        <ColumnFilters />
        <OrdenationFilters />
      </div>
      <FiltersList />
    </div>
  );
}

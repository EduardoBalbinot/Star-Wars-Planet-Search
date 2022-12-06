import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';
import planetsContext from './planetsContext';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({});
  const [nameFilter, setNameFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('');
  const [filters, setFilters] = useState([]);
  const [filterIndex, setFilterIndex] = useState(0);
  const [activeFilters, setActiveFilters] = useState({
    population: true,
    orbital_period: true,
    diameter: true,
    rotation_period: true,
    surface_water: true,
  });
  const [order, setOrder] = useState({ column: 'population', sort: 'ASC' });

  const savePlanetsOnState = async () => {
    setPlanets(await fetchPlanets());
  };

  useEffect(() => {
    savePlanetsOnState();
  }, []);

  const value = {
    planets,
    nameFilter,
    setNameFilter,
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    filters,
    setFilters,
    filterIndex,
    setFilterIndex,
    activeFilters,
    setActiveFilters,
    order,
    setOrder,
  };

  return (
    <planetsContext.Provider
      value={ value }
    >
      { children }
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

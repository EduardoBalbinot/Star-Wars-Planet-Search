import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';
import planetsContext from './planetsContext';

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({});

  const savePlanetsOnState = async () => {
    setPlanets(await fetchPlanets());
  };

  useEffect(() => {
    savePlanetsOnState();
  }, []);

  const value = {
    planets,
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
  children: PropTypes.shape({}).isRequired,
};

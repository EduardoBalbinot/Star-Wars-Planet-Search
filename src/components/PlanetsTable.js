import { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function PlanetsTable() {
  const {
    planets,
    nameFilter,
    filters,
    order,
  } = useContext(planetsContext);
  const planetsArray = planets.results;
  let planetsArrayFilteredByName = [''];
  if (planetsArray) {
    planetsArrayFilteredByName = planetsArray
      .filter((p) => p.name.toLowerCase().includes(nameFilter.toLowerCase()));

    if (filters.length > 0) {
      filters.forEach((f) => {
        if (f.comparisonFilter === 'maior que') {
          planetsArrayFilteredByName = planetsArrayFilteredByName
            .filter((p) => Number(p[f.columnFilter]) > Number(f.valueFilter));
        }
        if (f.comparisonFilter === 'menor que') {
          planetsArrayFilteredByName = planetsArrayFilteredByName
            .filter((p) => Number(p[f.columnFilter]) < Number(f.valueFilter));
        }
        if (f.comparisonFilter === 'igual a') {
          planetsArrayFilteredByName = planetsArrayFilteredByName
            .filter((p) => Number(p[f.columnFilter]) === Number(f.valueFilter));
        }
      });
    }

    const negativeNumber = -1;
    if (order.sort === 'ASC') {
      planetsArrayFilteredByName
        .sort((a, b) => {
          if (b[order.column] === 'unknown') return negativeNumber;
          return a[order.column] - b[order.column];
        });
    } else {
      planetsArrayFilteredByName
        .sort((a, b) => {
          if (b[order.column] === 'unknown') return 1;
          return b[order.column] - a[order.column];
        });
    }
  }

  return (
    <div className="tableDiv">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            (planetsArray && planetsArrayFilteredByName.map((p, i) => (
              <tr key={ i }>
                <td data-testid="planet-name">{ p.name }</td>
                <td>{ p.rotation_period }</td>
                <td>{ p.orbital_period }</td>
                <td>{ p.diameter }</td>
                <td>{ p.climate }</td>
                <td>{ p.gravity }</td>
                <td>{ p.terrain }</td>
                <td>{ p.surface_water }</td>
                <td>{ p.population }</td>
                <td>{ p.films.map((f) => `${f}\n`) }</td>
                <td>{ p.created }</td>
                <td>{ p.edited }</td>
                <td>{ p.url }</td>
              </tr>
            ))
            )
          }
        </tbody>
      </table>
    </div>
  );
}

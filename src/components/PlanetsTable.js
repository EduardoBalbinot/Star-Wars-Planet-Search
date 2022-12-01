import { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function PlanetsTable() {
  const { planets } = useContext(planetsContext);
  const planetsArray = planets.results;
  console.log(planetsArray);
  return (
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
          (planetsArray && planetsArray.map((p, i) => (
            <tr key={ i }>
              <td>{ p.name }</td>
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
  );
}

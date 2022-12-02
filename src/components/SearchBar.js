import { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function SearchBar() {
  const { setNameFilter } = useContext(planetsContext);

  const handleChange = ({ target }) => {
    setNameFilter(target.value);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
}

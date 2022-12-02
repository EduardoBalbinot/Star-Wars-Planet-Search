import { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function FiltersList() {
  const {
    filters,
    setFilters,
  } = useContext(planetsContext);

  const excluirFiltro = (id) => {
    setFilters(filters.filter((f) => f.id !== id));
  };
  return (
    <div>
      {
        filters.map((f) => (
          <div key={ f.id }>
            <span>
              { f.columnFilter }
              {' '}
              { f.comparisonFilter }
              {' '}
              { f.valueFilter }
            </span>
            <button
              type="button"
              onClick={ () => { excluirFiltro(f.id); } }
            >
              Excluir filtro
            </button>
          </div>
        ))
      }
    </div>
  );
}

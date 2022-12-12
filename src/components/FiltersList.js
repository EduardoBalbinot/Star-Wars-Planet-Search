import { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function FiltersList() {
  const {
    filters,
    setFilters,
    activeFilters,
    setActiveFilters,
  } = useContext(planetsContext);

  const excluirFiltro = (id, columnFilter) => {
    setActiveFilters({
      ...activeFilters,
      [columnFilter]: true,
    });
    setFilters(filters.filter((f) => f.id !== id));
  };

  return (
    <div>
      {
        filters.map((f) => (
          <div key={ f.id } data-testid="filter">
            <span>
              { f.columnFilter }
              {' '}
              { f.comparisonFilter }
              {' '}
              { f.valueFilter }
              {' '}
            </span>
            <button
              type="button"
              className="removeFilters"
              onClick={ () => { excluirFiltro(f.id, f.columnFilter); } }
            >
              Excluir filtro
            </button>
          </div>
        ))
      }
    </div>
  );
}

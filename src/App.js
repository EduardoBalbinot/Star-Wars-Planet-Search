import React from 'react';
import './App.css';
import PlanetsTable from './components/PlanetsTable';
import SearchBar from './components/SearchBar';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <SearchBar />
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;

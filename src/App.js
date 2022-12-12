import React from 'react';
import './App.css';
import PlanetsTable from './components/PlanetsTable';
import SearchBar from './components/SearchBar';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div className="mainDiv">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Star_Wars_Yellow_Logo.svg" alt="logo de star wars" className="logo" />
        <h1>―――― Lista de planetas ――――</h1>
        <div className="mainContent">
          <SearchBar />
          <PlanetsTable />
        </div>
      </div>
    </PlanetsProvider>
  );
}

export default App;

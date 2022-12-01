const fetchPlanets = async () => {
  const url = 'https://swapi.dev/api/planets';
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export default fetchPlanets;

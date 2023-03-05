export async function getPlanet(url: string, planetName: string) {
  console.log("getPlanet called");
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  let searchedPlanet!: {};
  for (const planet of data) {
    if (planet.name === planetName) searchedPlanet = planet;
  }
  // console.log(searchedPlanet);
  return searchedPlanet;
}

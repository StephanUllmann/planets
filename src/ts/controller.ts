import { getPlanet } from "./model";

// console.log(model.fetchData("../src/data.json"));

// async function getPlanet(url: string, planetName: string) {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   let searchedPlanet!: {};
//   for (const planet of data) {
//     if (planet.name === planetName) searchedPlanet = planet;
//   }
//   console.log(searchedPlanet);
//   return searchedPlanet;
// }

const getPlanetData = async function (planetName: string) {
  const planet = await getPlanet("../data.json", planetName);
  console.log(planet);
};

getPlanetData("Earth");

console.log("whatever");

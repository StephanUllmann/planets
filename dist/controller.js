var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getPlanet } from "./model.js";
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
const getPlanetData = function (planetName) {
    return __awaiter(this, void 0, void 0, function* () {
        const planet = yield getPlanet("../src/data.json", planetName);
        console.log(planet);
    });
};
getPlanetData("Earth");
console.log("puh");

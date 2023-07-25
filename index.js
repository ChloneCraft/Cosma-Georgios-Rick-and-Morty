const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

const api = "https://rickandmortyapi.com/api";
const apiCharacters = "https://rickandmortyapi.com/api/character";

import { createCharacterCard } from "./components/card/card.js";
import { nextPage, previousPage } from "./components/nav-button/nav-button.js";

// States
const maxPage = 42;
export let page = 1;
const searchQuery = "";

//createCharacterCard(); //testingpurposes

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getCharArray(pageIndex) {
  const characterData = await fetchData(
    apiCharacters + "/?page=" + pageIndex.toString()
  );
  const characters = characterData.results;
  return characters;
}

export async function fetchCharacters() {
  let characters = await getCharArray(page);
  //imgURL, name, status, type, occurrences
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const imgURL = character.image;
    const name = character.name;
    const status = character.status;
    const type = character.type;
    const occurrences = character.episode.length;
    const newCard = createCharacterCard(
      imgURL,
      name,
      status,
      type,
      occurrences
    );
    cardContainer.append(newCard);
    updatePageDisplay();
    console.log(imgURL);
  });
}

nextButton.addEventListener("click", () => {
  nextPage();
});
prevButton.addEventListener("click", () => {
  previousPage();
});

export function updatePageDisplay() {
  pagination.innerHTML = `${page} / ${maxPage}`;
}

export function setPage(newPage) {
  page = newPage;
}

fetchCharacters();

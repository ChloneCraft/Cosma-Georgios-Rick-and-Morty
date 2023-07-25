const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
// const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
// const pagination = document.querySelector('[data-js="pagination"]');

const apiCharacters = "https://rickandmortyapi.com/api/character";

import { createCharacterCard } from "./components/card/card.js";
import {
  nextPage,
  previousPage,
  createNextButton,
  createPreviousButton,
} from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

//creating pageElements
const pagination = createPagination();
const nextButton = createNextButton();
const prevButton = createPreviousButton();
const searchBar = createSearchBar();

//append elements
navigation.append(prevButton, pagination, nextButton);
document.querySelector("main").prepend(searchBar);

// States
export let maxPage = 42;
export let page = 1;
let searchQuery = "";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  maxPage = data.info["pages"];
  return data;
}

// async function getCharArray(api) {
//   const characterData = await fetchData(api + "/?page=" + page.toString());
//   const characters = characterData.results;
//   return characters;
// }
async function getCharArray() {
  let characterData;
  let url;
  if (searchQuery === "") {
    url = apiCharacters + "/?page=" + page.toString();
  } else {
    url = apiCharacters + "/?page=" + page.toString() + "&name=" + searchQuery;
  }
  console.log(url);
  characterData = await fetchData(url);
  console.log(characterData);
  const characters = characterData.results;
  return characters;
}

export async function fetchCharacters() {
  let characters = await getCharArray();
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
  });
}

nextButton.addEventListener("click", () => {
  nextPage();
});
prevButton.addEventListener("click", () => {
  previousPage();
});

function updatePageDisplay() {
  pagination.innerHTML = `${page} / ${maxPage}`;
}

export function setPage(newPage) {
  page = newPage;
}

fetchCharacters();

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData).query;
  searchQuery = data;
  if (data === "") {
    return;
  } else {
    setPage(1);
  }
  fetchCharacters();
});
createPagination();

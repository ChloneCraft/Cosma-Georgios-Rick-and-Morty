import { page } from "../../index.js";
import { setPage } from "../../index.js";
import { fetchCharacters } from "../../index.js";
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

export function nextPage(event) {
  if (page === 42) {
    event.preventDefault();
  }
  setPage(page + 1);
  fetchCharacters();
}
export function previousPage(event) {
  if (page === 1) {
    event.preventDefault();
  }
  setPage(page - 1);
  fetchCharacters();
}

import { page, maxPage } from "../../index.js";
import { setPage } from "../../index.js";
import { fetchCharacters } from "../../index.js";

export function createPreviousButton() {
  const prevButton = document.createElement("button");
  prevButton.classList.add("button", "button--prev");
  prevButton.setAttribute("data-js", "button-prev");
  prevButton.innerText = "previous";
  return prevButton;
}
export function createNextButton() {
  const nextButton = document.createElement("button");
  nextButton.classList.add("button--next", "button");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.innerText = "next";
  return nextButton;
}

export function nextPage(event) {
  if (page === maxPage) {
    // event.preventDefault();
    return;
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

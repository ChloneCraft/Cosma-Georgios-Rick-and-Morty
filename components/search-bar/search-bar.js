/* <div class="search-bar-container" data-js="search-bar-container">
        <form action="" class="search-bar" data-js="search-bar">
          <input
            name="query"
            class="search-bar__input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button>
        </form>
      </div> */

export function createSearchBar() {
  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("search-bar-container");
  searchBarContainer.setAttribute("data-js", "search-bar-container");
  //------------------
  const searchBarForm = document.createElement("form");
  searchBarForm.classList.add("search-bar");
  searchBarForm.setAttribute("data-js", "search-bar");
  searchBarForm.setAttribute("action", "");
  //------------------
  const searchBarInput = document.createElement("input");
  searchBarInput.classList.add("search-bar__input");
  searchBarInput.setAttribute("name", "query");
  searchBarInput.setAttribute("type", "text");
  searchBarInput.setAttribute("placeholder", "search characters");
  searchBarInput.setAttribute("aria-label", "character name");
  //------------------
  const searchBarButton = document.createElement("button");
  searchBarButton.classList.add("search-bar__button");
  searchBarButton.setAttribute("aria-label", "search for character");
  //------------------
  const searchBarImage = document.createElement("img");
  searchBarImage.classList.add("search-bar__icon");
  searchBarImage.setAttribute("src", "assets/magnifying-glass.png");
  searchBarImage.setAttribute("alt", "");

  searchBarButton.append(searchBarImage);
  searchBarForm.append(searchBarInput, searchBarButton);
  searchBarContainer.append(searchBarForm);

  return searchBarContainer;
}

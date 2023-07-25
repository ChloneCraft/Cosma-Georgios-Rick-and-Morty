export function createCharacterCard(imgURL, name, status, type, occurrences) {
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.innerHTML = `
  <div class="card__image-container">
    <img
      class="card__image"
      src="${imgURL}"
      alt="${name}"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${name}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${status}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${type}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${occurrences}</dd>
    </dl>
  </div>`;
  //   document.querySelector("main").append(newCard); //for testing
  return newCard;
}
// imgurl = https://rickandmortyapi.com/api/character/avatar/1.jpeg

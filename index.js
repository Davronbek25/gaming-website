const initialCards = document.getElementsByClassName("initial-cards");

const cardTexts = [
  "Heroes of Might and Magic® 3: Complete",
  "Card Shark",
  "Sumatra: Fate of Yandi",
  "Hellblade: Senua's Sacriface",
  "Heroes of Might and Magic® 3: Complete",
  "Card Shark",
  "Sumatra: Fate of Yandi",
  "Hellblade: Senua's Sacriface",
  "Heroes of Might and Magic® 3: Complete",
  "Card Shark",
];
const cardDiscounts = ["-45%", "-15%", "-9%", "-75%", "-45%", "-15%", "-9%", "-75%", "-45%", "-15%"];
const cardPrices = ["€ 14.89", "€ 16.99", "€ 5.19", "€ 7.49", "€ 14.89", "€ 16.99", "€ 5.19", "€ 7.49", "€ 14.89", "€ 16.99"];
const cardActualPrices = ["€ 26.99", "€ 19.99", "€ 5.69", "€ 29.99", "€ 26.99", "€ 19.99", "€ 5.69", "€ 29.99", "€ 26.99", "€ 19.99"];

for (let i = 0; i < 4; i++) {
  initialCards[0].innerHTML += `
          <div class="card px-0 shadow-sm" style="width: 16rem">
            <img src="./imgs/tile (${
              i + 1
            }).jpg" class="card-img-top" alt="..." />
            <div class="card-body pt-2 pb-0 px-2">
              <p class="card-text">${cardTexts[i]}</p>
              <div class="footer-card">
                <i class="fa-brands fa-windows me-auto"></i>
                <div class="float-end d-flex align-items-start">
                  <span class="me-2">${cardDiscounts[i]}</span>
                  <div class="d-flex flex-column justify-content-start">
                    <span class="align-self-end">${cardPrices[i]}</span>
                    <span class="position-relative">${
                      cardActualPrices[i]
                    }</span>
                    </div>
                    <div class="ms-2 d-none">
                    <i class="bi bi-cart-plus"></i>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>`;
}

for (let i = 0; i < 3; i++) {
  initialCards[1].innerHTML += `
          <div class="card px-0 shadow-sm" style="width: 21.8rem">
            <img src="./imgs/tile (${
              i + 15
            }).jpg" class="card-img-top" alt="..." />
            <div class="card-body pt-2 pb-0 px-2">
              <p class="card-text">${cardTexts[i]}</p>
              <div class="footer-card">
                <i class="fa-brands fa-windows me-auto"></i>
                <div class="float-end d-flex align-items-start">
                  <span class="me-2">${cardDiscounts[i]}</span>
                  <div class="d-flex flex-column justify-content-start">
                    <span class="align-self-end">${cardPrices[i]}</span>
                    <span class="position-relative">${
                      cardActualPrices[i]
                    }</span>
                    </div>
                    <div class="ms-2 d-none">
                    <i class="bi bi-cart-plus"></i>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>`;
}

for (let i = 0; i < 3; i++) {
  document.querySelectorAll(".initial-cards .card")[i].style.marginRight =
    "21px";
}

for (let i = 4; i < 6; i++) {
  document.querySelectorAll(".initial-cards .card")[i].style.marginRight =
    "21px";
}

document.querySelectorAll(".carouselOrg").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
        <div class="carousel__nav">
          ${buttonsHtml.join("")}
          </div>
      `
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});

for (let i = 0; i < 3; i++) {
  const myFunction = (x, y) => {
    let widthCard = i > 0 ? "90%" : "100%";
    let cardInnerHtml = `
      <div class="card px-0 shadow-sm ms-auto" style="width: ${widthCard}; height: ${
      i > 0 ? "90%" : "95%"
    };">
        <img src="./imgs/tile (${i + 15 + x}).jpg" style="${
      i === 0 ? "height: 82%" : ""
    }; object-fit: cover" />
        <div class="card-body pt-1 pb-0 px-2" style="${
          i === 0 ? "height: 18%" : ""
        } ">
          <p class="card-text ${ i > 0 ? "mb-2" : "mb-3"}">${cardTexts[i]}</p>
          <div class="footer-card" style=" ${
            i > 0 ? "margin-bottom: 10px" : ""
          }">
            <i class="fa-brands fa-windows me-auto text-dark fs-6" style="position: relative; bottom: 1rem"></i>
            <div class="float-end d-flex align-items-start">
              <span class="me-2">${cardDiscounts[i]}</span>
              <div class="d-flex flex-column justify-content-start">
                <span class="align-self-end">${cardPrices[i]}</span>
                <span class="position-relative text-dark">${cardActualPrices[i]}</span>
                </div>
                <div class="ms-2 d-none">
                <i class="bi bi-cart-plus"></i>
                </div>
                </div>
                </div>
                </div>
                </div>`;
    y.innerHTML = cardInnerHtml;
  };
  if (i === 0) {
    for (let j = 0; j < 3; j++) {
      myFunction(
        0 + j*5,
        document
          .querySelectorAll(".initial-cards")[2 + j]
          .querySelectorAll(".col:first-child")[0]
      );
    }
  } else if (i === 1) {
    for (let j = 0; j < 3; j++) {
      myFunction(
        0 + j*5,
        document
          .querySelectorAll(".initial-cards")[2 + j]
          .querySelectorAll(
            ".col:nth-child(2) > .row-cols-2:first-child > .col:first-child"
          )[0]
      );
  
      myFunction(
        1 + j*5,
        document
          .querySelectorAll(".initial-cards")[2 + j]
          .querySelectorAll(
            ".col:nth-child(2) > .row-cols-2:first-child > .col:nth-child(2)"
          )[0]
      );
    }
  } else {
    for (let j = 0; j < 3; j++) {
      myFunction(
        1 + j*5,
        document
          .querySelectorAll(".initial-cards")[2 + j]
          .querySelectorAll(
            ".col:nth-child(2) > .row-cols-2:nth-child(2) > .col:first-child"
          )[0]
      );
  
      myFunction(
        2 + j*5,
        document
          .querySelectorAll(".initial-cards")[2 + j]
          .querySelectorAll(
            ".col:nth-child(2) > .row-cols-2:nth-child(2) > .col:nth-child(2)"
          )[0]
      );
    }
  }
}

const cards = document.querySelectorAll(".card");
const cartPlus = document.querySelectorAll(
  ".footer-card > div > div:nth-child(3)"
);
const windows = document.getElementsByClassName("fa-windows");
// console.log(cards, 'cards')
// console.log(cartPlus, windows, 'test')

for (let i = 0; i < 22; i++) {
  cards[i].addEventListener("mouseover", function () {
    cartPlus[i].classList.remove("d-none");
    windows[i].classList.add("d-none");
  });
  cards[i].addEventListener("mouseout", function () {
    cartPlus[i].classList.add("d-none");
    windows[i].classList.remove("d-none");
  });
}

const unList = document.querySelector('.game-list')
console.log(unList)

for(let i = 0; i < 10; i++) {
  unList.innerHTML += `
  <li class="list-group-item d-flex p-0" style="height: 76px;">
    <img src="./imgs/tile (${i + 1}).jpg" width="21%">
    <div class="list-footer py-1 w-100">
      <div>${cardTexts[i]}</div>
      <div class="d-flex justify-content-between mt-2">
        <i class="fa-brands fa-windows me-auto mt-2"></i>
        <div class="float-end d-flex align-items-start">
          <span class="me-2">${cardDiscounts[i]}</span>
          <div class="d-flex flex-column justify-content-start">
            <span class="align-self-end text-secondary">${cardActualPrices[i]}</span>
            <span class="position-relative">${cardPrices[i]}</span>
          </div>
          <div class="ms-2 d-none">
            <i class="bi bi-cart-plus"></i>
          </div>
        </div>
      </div>
    </div>
  </li>
  `
}

unList.innerHTML += `<button type="button" class="btn game-list-btn">Show more<i class="bi bi-chevron-double-right ms-5"></i></button>`
const listGroupItem = document.querySelectorAll('.list-group-item')
const cartPlusList = document.querySelectorAll('.list-group-item > .list-footer .ms-2')
console.log(cartPlusList)

for (let i = 0; i < 10; i++) {
  listGroupItem[i].addEventListener("mouseover", function () {
    cartPlusList[i].classList.remove("d-none");
    windows[i + 22].classList.add("invisible");
  });
  listGroupItem[i].addEventListener("mouseout", function () {
    cartPlusList[i].classList.add("d-none");
    windows[i + 22].classList.remove("invisible");
  });
}

let finalCards = document.getElementsByClassName("final-cards")
for (let i = 0; i < 3; i++) {
  let num = i * 4
  for(let j = 0; j < 4; j++) {
    let col = document.createElement('div')
    col.classList.add('col')
    col.style.backgroundImage = `url('./imgs/tile\ \(${j + 1 + num}\).jpg\')`
    col.style.marginRight = j === 3 ? "0px" : "25px"
    col.innerHTML = `
    <div class = 'final-cards-footer'>
    <h5>Coming soon: <strong>Foretales</strong></h5>
    <span><i class="bi bi-chat-fill me-1"></i>3</span><span class="float-end">7 hours ago</span>
    </div>
    `
    finalCards[i].appendChild(col)
  }
}

const carouselOrg2 = document.querySelectorAll('.carouselOrg > .carousel__item')
carouselOrg2[3].classList.add('newHeight')
carouselOrg2[4].classList.add('newHeight')
carouselOrg2[5].classList.add('newHeight')
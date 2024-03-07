"use strict";
const products = [
  {
    id: 1,
    productName: "Men’s Green Running",
    description:
      "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
    price: 105,
    category: "Men",
    imgSrc: "./imgs/m1.jpg",
    Rate: 3.5,
  },
  {
    id: 2,
    productName: "Men’s Earth-Tone Sneaker",
    description:
      "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
    price: 75,
    category: "Men",
    imgSrc: "./imgs/m2.jpg",
    Rate: 3.8,
  },
  {
    id: 3,
    productName: "Men’s Classic Blue",
    description:
      "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
    price: 69,
    category: "Men",
    imgSrc: "./imgs/m3.jpg",
    Rate: 2.5,
  },
  {
    id: 4,
    productName: "Men’s Black Running",
    description:
      "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
    price: 84,
    category: "Men",
    imgSrc: "./imgs/m4.jpg",
    Rate: 3.9,
  },
  {
    id: 5,
    productName: "Men’s Moonstone Sneaker",
    description:
      "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
    price: 75,
    category: "Men",
    imgSrc: "./imgs/m5.jpg",
    Rate: 4.5,
  },
  {
    id: 6,
    productName: "Women’s Blue Training",
    description:
      "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
    price: 60,
    category: "Women",
    imgSrc: "./imgs/w1.jpg",
    Rate: 3.9,
  },
  {
    id: 7,
    productName: "Women’s Cream Suede",
    description:
      "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
    price: 55,
    category: "Women",
    imgSrc: "./imgs/w2.jpg",
    Rate: 2.1,
  },
  {
    id: 8,
    productName: "Women’s Tan Sneaker",
    description:
      "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
    price: 80,
    category: "Women",
    imgSrc: "./imgs/w3.jpg",
    Rate: 4.8,
  },
  {
    id: 9,
    productName: "Women’s Choco City Run",
    description:
      "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
    price: 65,
    category: "Women",
    imgSrc: "./imgs/w4.jpg",
    Rate: 4.7,
  },
];

const slider = document.querySelector(".slider");
const searchBox = document.querySelector(".search");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".close");
let filteredProducts = products;

const search = () => {
  const inputValue = searchInput.value.toLowerCase();
  filteredProducts = products.filter((product) => {
    return product.productName.toLowerCase().includes(inputValue);
  });

  if (filteredProducts.length === 0) {
    slider.innerHTML = "<p>No products found</p>";
    return;
  } else {
    showProducts();
  }
};

searchIcon.addEventListener("click", () => {
  if (searchInput.value === "") return;
  search();
});

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && searchInput.value !== "") {
    search();
  }
});

const showProducts = () => {
  slider.innerHTML = "";
  for (let prd of filteredProducts) {
    const childDiv = document.createElement("div");
    childDiv.classList.add("prdItem");
    childDiv.innerHTML = `
    <div class="imgBox">
      <img src="${prd.imgSrc}" class='img'>
    </div>
    <div class='prdInfo'>
      <div>
        <h4>${prd.productName}</h4>
      </div>
      <div class='moreInfo'>
        <p>${prd.price} EGP</p>
        <a value=${prd.id} class="show"><i class="fa-solid fa-eye"></i></a>
      </div>
    </div>
    `;
    slider.appendChild(childDiv);
  }
};

const popupHandler = (e) => {
  document.querySelector(".main").classList.toggle("blur");
  document.querySelector(".header").classList.toggle("blur");
  document.querySelector(".footer").classList.toggle("blur");
  popup.classList.toggle("active-popup");

  const productId = e.target.parentNode.getAttribute("value");
  console.log(productId);
  const product = filteredProducts.find(
    (item) => item.id === parseInt(productId)
  );

  popup.innerHTML = `
    <div class="box">
      <div class="img">
        <img src="${product?.imgSrc}" alt="" />
      </div>
      <div class="info">
        <h3 class="name">${product?.productName}</h3>
        <p class="description">${product?.description}</p>
        <div class="prd-cat">
          <p class="cat">Category: ${product?.category}</p>
          <p class="rate">${product?.Rate} <i class="fa-solid fa-star"></i></p>
        </div>
        <p class="price">Price: ${product?.price} EGP</p>
        <button class="close">Close</button>
      </div>
    </div>`;

  document.querySelector(".close").addEventListener("click", () => {
    popup.classList.remove("active-popup");
    document.querySelector(".main").classList.remove("blur");
    document.querySelector(".header").classList.remove("blur");
    document.querySelector(".footer").classList.remove("blur");
  });
};
slider.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("show")) {
    popupHandler(e);
  }
});
showProducts();

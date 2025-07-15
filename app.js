
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 200,
    colors: [
      {
        code: "black",
        img: "./img/product/air.png",
      },
      {
        code: "darkblue",
        img: "./img/product/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 240,
    colors: [
      {
        code: "lightgray",
        img: "./img/product/jordan.png",
      },
      {
        code: "lightgreen",
        img: "./img/product/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 260,
    colors: [
      {
        code: "white",
        img: "./img/product/blazer.png",
      },
      {
        code: "green",
        img: "./img/product/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 140,
    colors: [
      {
        code: "black",
        img: "./img/product/crater.png",
      },
      {
        code: "white",
        img: "./img/product/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 110,
    colors: [
      {
        code: "grey",
        img: "./img/product/hippie.png",
      },
      {
        code: "black",
        img: "./img/product/hippie2.png",
      },
    ],
  },
  {
    id: 6,
    title: "Air Max",
    price: 289,
    colors: [
      {
        code: "green",
        img: "./img/product/airmax.png",
      },
      {
        code: "brown",
        img: "./img/product/airmax2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "darkgrey";
      size.style.color = "lightgrey";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
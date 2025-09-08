// load all tress
// https://openapi.programming-hero.com/api/plants
const loadAllTrees = () => {
  loadSpinner(true);
  fetch(`https://openapi.programming-hero.com/api/plants`)
    .then((res) => res.json())
    .then((data) => {
      displayPlant(data.plants);
      const allTreesButton = document.getElementById("all-trees");

      const categoryBtn = document.querySelectorAll(".category-btn");

      // remove 'active' class from all buttons
      categoryBtn.forEach((btn) => btn.classList.remove("active"));
      allTreesButton.classList.add("active");
    });
};

// load all categories
const loadCategories = () => {
  loadSpinner(true);
  fetch(`https://openapi.programming-hero.com/api/categories`)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

// display all categories
const displayCategories = (categories) => {
  //   console.log(categories);
  //   get the container first where to display
  const categoryContainer = document.getElementById("categories-container");

  // fetch all the categories using loop
  categories.forEach((category) => {
    // create the button first for each category
    const categoryBtn = document.createElement("div");
    categoryBtn.innerHTML = `
        <button id="category-btn-${category.id}" onclick=loadPlant(${category.id}) class="hover:bg-[#15803D] w-11/12 text-left rounded-lg px-2 hover:text-white p-2 category-btn">${category.category_name}</button>
    `;

    categoryContainer.appendChild(categoryBtn);
  });
  loadSpinner(false);
};

// load Plant
const loadPlant = (id) => {
  loadSpinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPlant(data.plants);
      // implement active status
      const activeBtn = document.getElementById(`category-btn-${id}`);
      const categoryBtn = document.querySelectorAll(".category-btn");

      // remove 'active' class from all buttons
      categoryBtn.forEach((btn) => btn.classList.remove("active"));

      activeBtn.classList.add("active");

      // console.log(activeBtn);
    });
};

// display plant
const displayPlant = (plants) => {
  // get the container first
  const plantContainer = document.getElementById("plant-container");
  plantContainer.innerHTML = "";
  //   console.log(plants);
  plants.forEach((plant) => {
    // console.log(plant);
    // create the card
    const card = document.createElement("div");
    card.innerHTML = `
  <div class="card bg-base-100 shadow-sm p-4 flex flex-col md:h-[500px]">
    <figure class="w-full">
      <img class="w-full h-56 object-cover rounded-md"
        src="${plant.image}"
        alt="plant image" />
    </figure>
    <div class="flex flex-col flex-1 mt-2">
      <h2 onclick=plantDetails(${plant.id})  class="card-title text-lg font-semibold cursor-pointer">${plant.name}</h2>
      <p class="flex-1 line-clamp-3 text-sm text-gray-600">${plant.description}</p>

      <div class="flex justify-between items-center mt-2">
        <p class="bg-[#DCFCE7] px-4 py-1 rounded-full text-sm">${plant.category}</p>
        <p class="font-semibold">
          <span class="font-bold text-xl">৳</span> ${plant.price}
        </p>
      </div>

      <div class="card-actions mt-3">
        <button onclick='addToCart(${plant.id})' class="btn bg-[#15803d] text-white w-full rounded-full">Add to Cart</button>
      </div>
    </div>
  </div>
`;

    plantContainer.appendChild(card);
  });
  loadSpinner(false);
};

// show single plant details
const plantDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => showPlantDetailsModal(data.plants));
};

// display modal
const showPlantDetailsModal = (plantsInfo) => {
  const modalContainer = document.getElementById("details-container");
  modalContainer.innerHTML = `
  <div class="card bg-base-100 shadow-sm p-4 flex flex-col md:h-[500px] space-y-5">
    <h2 class="card-title text-lg font-semibold cursor-pointer">${plantsInfo.name}</h2>
    <figure class="w-full">
      <img class="w-full h-56 object-cover rounded-md"
        src="${plantsInfo.image}"
        alt="plant image" />
    </figure>
    <div class="flex flex-col flex-1 ">
        <div>
        <p class=""><span class='font-semibold'>Category: </span>${plantsInfo.category}</p>
            <p>
            <span class='font-semibold'>Price: </span> <span class=" text-xl">৳</span>  ${plantsInfo.price}
            </p>
        </div>
        <div class="flex justify-between items-center mt-2">
            <p class="flex-1 line-clamp-3 text-sm "><span class='font-semibold'>Description: </span>${plantsInfo.description}</p>
        </div>
      
    </div>
  </div>
`;

  document.getElementById("my_modal_5").showModal();
};

// load data for cart
const addToCart = (id) => {
  // console.log(id);
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => {
      calculateCartDetails(data.plants);
    });
};

// calculate cart details
let totalPrice = 0;
const calculateCartDetails = (items) => {
  const cartContainer = document.getElementById("cart-container");
  const totalContainer = document.getElementById("total-container");
  const price = items.price;
  totalPrice += price;

  const cartDiv = document.createElement("div");
  // console.log(totalPrice);
  cartDiv.innerHTML = `
                    <div class="flex justify-between items-center bg-[#F0FDF4] p-2 rounded-md">
                        <div>
                            <h2 class="font-semibold">${items.name}</h2>
                            <p>${items.price} x 1</p>
                        </div>
                        <i onclick=removeFromCart(${items.id}) class="fa-solid fa-xmark hover:cursor-pointer"></i>
                    </div>

               
                
  `;

  // remove button handle
  const removeBtn = cartDiv.querySelector("i");
  removeBtn.addEventListener("click", () => {
    cartDiv.remove();
    totalPrice -= price;
    updateTotal(totalContainer);
  });
  cartContainer.appendChild(cartDiv);

  updateTotal(totalContainer);
};

// function to update the total price
const updateTotal = (totalContainer) => {
  totalContainer.innerHTML = `
    <hr>
    <div class="flex justify-between items-center">
        <h3 class="font-semibold">Total</h3>
        <p>৳ ${totalPrice}</p>
    </div>
  `;
};

// load spinner
const loadSpinner = (status) => {
  const spinnerBtn = document.getElementById("load-spinner");
  if (status == true) {
    spinnerBtn.classList.remove("hidden");
  } else {
    spinnerBtn.classList.add("hidden");
  }
};
// call load categories
loadAllTrees();
loadCategories();

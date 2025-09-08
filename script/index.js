// load all categories
const loadCategories = () => {
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
        <button onclick=loadPlant(${category.id}) class="hover:bg-[#15803D] w-11/12 text-left rounded-lg px-2 hover:text-white p-2">${category.category_name}</button>
    `;

    categoryContainer.appendChild(categoryBtn);
  });
};

// load Plant
const loadPlant = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlant(data.plants));
};

// display plant
const displayPlant = (plants) => {
  // get the container first
  const plantContainer = document.getElementById("plant-container");
  plantContainer.innerHTML = "";
  plants.forEach((plant) => {
    console.log(plant);
    // create the card
    const card = document.createElement("div");
    card.innerHTML = `
  <div class="card bg-base-100 shadow-sm p-4 flex flex-col md:h-[380px]">
    <figure class="w-full">
      <img class="w-full h-48 md:h-full object-cover rounded-md"
        src="${plant.image}"
        alt="plant image" />
    </figure>
    <div class="flex flex-col flex-1 mt-2">
      <h2 class="card-title text-lg font-semibold">${plant.name}</h2>
      <p class="flex-1 line-clamp-3 text-sm text-gray-600">${plant.description}</p>

      <div class="flex justify-between items-center mt-2">
        <p class="bg-[#DCFCE7] px-4 py-1 rounded-full text-sm">${plant.category}</p>
        <p class="font-semibold">
          <span class="font-bold text-xl">৳</span> ${plant.price}
        </p>
      </div>

      <div class="card-actions mt-3">
        <button class="btn bg-[#15803d] text-white w-full rounded-full">Add to Cart</button>
      </div>
    </div>
  </div>
`;

    plantContainer.appendChild(card);
  });
};

// call load categories
loadCategories();

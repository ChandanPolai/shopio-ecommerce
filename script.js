

const barS = document.querySelector(".hamburger");
const navtext = document.querySelector(" ul"); // Correct the selector here
let flag = true;

barS.addEventListener("click", () => {
  if (flag) {
    navtext.style.display = "flex"; // Change to 'flex' if it's a flex container
    barS.classList.remove("fa-bars");
    barS.classList.add("fa-xmark");
    flag = false;
  } else {
    navtext.style.display = "none";
    barS.classList.remove("fa-xmark");
    barS.classList.add("fa-bars");
    flag = true;
  }
});

// swiper js code
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});






// product information

const myProducts = [
  {
    tag: "London Hills",
    name: "Men Printed Round Neck Cotton Blend Purple T-Shirt",
    curentName: "redbuggytshirt",
    price: "₹349",
    image: "images/shopytshirts/tsirt1.webp",
    allimages: [
      "images/shopytshirts/1.0.webp",
      "images/shopytshirts/1.00.webp",
      "images/shopytshirts/1.000.webp",
      "images/shopytshirts/tsirt1.webp",
    ],
  },

  {
    tag: "Hongkong Hills",
    name: "Men Printed Round Neck Cotton Blend Purple T-Shirt",
    curentName: "maroonbuggytshirt",
    price: "₹449",
    image: "images/shopytshirts/tsirt2.webp",
    allimages: [
      "images/shopytshirts/2.0.webp",
      "images/shopytshirts/2.00.webp",
      "images/shopytshirts/2.000.webp",
      "images/shopytshirts/tsirt2.webp",
    ],
  },
  {
    tag: "Moroco Hills",
    name: "Men Printed Round Neck Cotton Blend Purple T-Shirt",
    curentName: "pencilcolortshirt",
    price: "₹349",
    image: "images/shopytshirts/tshrit3.webp",
    allimages: [
      "images/shopytshirts/3.0.webp",
      "images/shopytshirts/3.00.webp",
      "images/shopytshirts/3.000.webp",
      "images/shopytshirts/tshrit3.webp",
    ],
  },
  {
    tag: "Newyork Hills",
    name: "Men Printed Round Neck Cotton Blend Purple T-Shirt",
    curentName: "mehendicolorhodiee",
    price: "₹349",
    image: "images/shopytshirts/tshirt4.webp",
    allimages: [
      "images/shopytshirts/4.0.webp",
      "images/shopytshirts/4.00.webp",
      "images/shopytshirts/4.000.webp",
      "images/shopytshirts/tshirt4.webp",
    ],
  },
  {
    tag: "India Hills",
    name: "Men Printed Round Neck Cotton Blend Purple T-Shirt",
    curentName: "jacket",
    price: "₹349",
    image: "images/shopytshirts/tshirt5.webp",
    allimages: [
      "images/shopytshirts/5.0.webp",
      "images/shopytshirts/5.00.webp",
      "images/shopytshirts/5.000.webp",
      "images/shopytshirts/tshirt5.webp",
    ],
  },
  // my jeans section
  {
    tag: "DENIM UNCLE",
    name: "Men Regular Mid Rise Blue Jeans",
    curentName: "jeans",
    price: "₹998",
    image: "images/shopy pants/jeans1.webp",
    allimages: [
      "images/shopy pants/1.0.webp",
      "images/shopy pants/1.00.webp",
      "images/shopy pants/1.00.webp",
      "images/shopy pants/jeans1.webp",
    ],
  },
  {
    tag: "DENIM UNCLE",
    name: "Men Regular Mid Rise White Jeans",
    curentName: "whitejeans",
    price: "₹1999",
    image: "images/shopy pants/jeans2.webp",
    allimages: [
      "images/shopy pants/2.0.webp",
      "images/shopy pants/2.00.webp",
      "images/shopy pants/2.00.webp",
      "images/shopy pants/jeans2.webp",
    ],
  },
  {
    tag: "DENIM UNCLE",
    name: "Men Regular Mid Rise black Jeans",
    curentName: "blackbuggyjeans",
    price: "₹699",
    image: "images/shopy pants/jeans3.webp",
    allimages: [
      "images/shopy pants/3.0.webp",
      "images/shopy pants/3.00.webp",
      "images/shopy pants/3.00.webp",
      "images/shopy pants/jeans3.webp",
    ],
  },
  {
    tag: "DENIM UNCLE",
    name: "Men Regular Mid Rise black Jeans",
    curentName: "denimjeans",
    price: "₹2999",
    image: "images/shopy pants/jeans4.webp",
    allimages: [
      "images/shopy pants/4.0.webp",
      "images/shopy pants/4.00.webp",
      "images/shopy pants/4.00.webp",
      "images/shopy pants/jeans4.webp",
    ],
  },
  {
    tag: "DENIM UNCLE",
    name: "Men Regular Mid Rise blue Jeans",
    curentName: "styleishjeans",
    price: "₹699",
    image: "images/shopy pants/jeans5.webp",
    allimages: [
      "images/shopy pants/5.0.webp",
      "images/shopy pants/5.00.webp",
      "images/shopy pants/5.00.webp",
      "images/shopy pants/jeans5.webp",
    ],
  },
  // my shoes section
  {
    tag: "DENIM UNCLE",
    name: "High Top Air Casual Long (Shoes)",
    curentName: "airjorden",
    price: "₹699",
    image: "images/shoessections/shoes1.webp",
    allimages: [
      "images/shoessections/1.0.webp",
      "images/shoessections/1.00.webp",
      "images/shoessections/1.000.webp",
      "images/shoessections/shoes1.webp",
    ],
  },
  {
    tag: "DENIM UNCLE",
    name: "High Top Air Casual Long (Shoes)",
    curentName: "sneaker",
    price: "₹699",
    image: "images/shoessections/shoes2.webp",
    allimages: [
      "images/shoessections/2.0.webp",
      "images/shoessections/2.00.webp",
      "images/shoessections/2.000.webp",
      "images/shoessections/shoes2.webp",
    ],
  },
  {
    tag: "DENIM UNCLE",
    name: "High Top Air Casual Long (Shoes)",
    curentName: "200undersneaker",
    price: "₹699",
    image: "images/shoessections/shoes3.webp",
    allimages: [
      "images/shoessections/3.0.webp",
      "images/shoessections/3.00.webp",
      "images/shoessections/3.000.webp",
      "images/shoessections/shoes3.webp",
    ],
  },
  {
    tag: "DENIM UNCLE",
    name: "High Top Air Casual Long (Shoes)",
    curentName: "jordenshoes",
    price: "₹699",
    image: "images/shoessections/shoes4.webp",
    allimages: [
      "images/shoessections/4.0.webp",
      "images/shoessections/4.00.webp",
      "images/shoessections/4.000.webp",
      "images/shoessections/shoes4.webp",
    ],
  },
  {
    tag: "DENIM UNCLE",
    name: "High Top Air Casual Long (Shoes)",
    curentName: "pumaunder400",
    price: "₹699",
    image: "images/shoessections/shoes5.webp",
    allimages: [
      "images/shoessections/5.0.webp",
      "images/shoessections/5.00.webp",
      "images/shoessections/5.000.webp",
      "images/shoessections/shoes5.webp",
    ],
  },
];

// Get all sections and product boxes

// 🚀my three section in html element select

const sections = document.querySelectorAll("section");
const actualProducts = document.querySelectorAll(".tshirts-box");

// all the elements selected of my product full information
const imgInformContainer = document.getElementById("product-information");
const backBtn = document.getElementById("back-btn");
const imgInform = document.querySelector(".img-inform");
const productInformations = document.querySelector(".product-info-text");
const h3Element = productInformations.querySelector("h3");
const h1Element = productInformations.querySelector("h1");
const dumysmalltext = productInformations.querySelector(".dumysmalltext");

const priceElement = document.querySelector(".special-price");
const indrs=document.querySelector('del');
const Off=document.querySelector('.off');
const size_choose=document.querySelector('.size-choose');
const back=document.querySelector('#back-btn');
const buy=document.querySelector('#buy-now');
const dumytext=document.querySelector('.some-products-deatils');

// Define a function to show product details
function showProductDetails(product) {
  imgInform.querySelector("img").src = product.image;
  h3Element.textContent = product.tag;
  h1Element.textContent = product.name;
  priceElement.textContent = product.price;
  
  // 🦴🦴🦴skeleton loading effect add
  const elementsToAddSkeletonLoader = [
    imgInform, h3Element, h1Element, dumysmalltext, priceElement,
    indrs, Off, size_choose, back, buy, dumytext
  ];
  
  elementsToAddSkeletonLoader.forEach(element => element.classList.add('skeleton-loader'));
  

  // Display the three images from the clicked product's allimages array in four-images div
  let fourImagesContainer = imgInform.querySelector(".four-images");
  if (fourImagesContainer) {
    fourImagesContainer.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      let imgElement = document.createElement("img");
      imgElement.src = product.allimages[i];
      imgElement.alt = "Product Image";
      imgElement.className = "photos";
      fourImagesContainer.appendChild(imgElement);

      // When the user clicks the images, show the top image functionality
      imgElement.addEventListener("click", () => {
        imgInform.querySelector("img").src = imgElement.src;
      });
    }

    setTimeout(()=>{
      elementsToAddSkeletonLoader.forEach(element => element.classList.remove('skeleton-loader'));
    },2500);
    
  } else {
    console.error("Element with class 'four-images' not found.");
  }
}

// Add click event listeners to each product box
actualProducts.forEach((productBox, index) => {
  productBox.addEventListener("click", () => {
    // Get the clicked product details
    const clickedProduct = myProducts[index];
    // Hide all sections and show the product information container
    sections.forEach((section) => {
      section.style.display = "none";
    });
    imgInformContainer.style.display = "block";

    // Add click event listener to the back button
    backBtn.addEventListener("click", () => {
      imgInformContainer.style.display = "none";
      sections.forEach((section) => {
        section.style.display = "block";
      });
    });

    // Display the clicked product details in img-inform
    showProductDetails(clickedProduct);
  });
});


// 📺📺📺search bar functionality add
const searchinput = document.querySelector("#search-bar");
const searchBTN = document.querySelector(".search-btn");
const searchPapper = document.querySelector("#search-paper");

// seachbox find items
searchinput.addEventListener("input", searchALLitems);

function searchALLitems() {
  // remove the slider and prduct section in this function⬇️⬇️
  allitemsRemove();
  const searchTerm = searchinput.value.toLowerCase();
  console.log(searchTerm);
  // Clear previous search results
  searchPapper.innerHTML = "";

  // Filter products based on the search term
  const filteredProducts = myProducts.filter((product) =>
    product.curentName.toLowerCase().includes(searchTerm)
  );

  searchPapper.style.display = "block";

  if (filteredProducts.length === 0) {
    searchPapper.innerHTML="<h1>No results found.</h1>";
  } else {
    filteredProducts.forEach((listitems) => {
      let list = document.createElement("li");
  
      let nameofPRO = document.createElement("p");
      nameofPRO.classList.add("product-list-name");
      nameofPRO.textContent = listitems.curentName;
  
      let proimages = document.createElement("img");
      proimages.classList.add("list-images");
      proimages.src = listitems.image;
  
      list.appendChild(nameofPRO);
      list.appendChild(proimages);
      searchPapper.appendChild(list);
  
      // 😐😐😐click the list of searchbar
      list.addEventListener("click", () => {
        // Hide all sections and show the product information container
        sections.forEach((section) => {
          section.style.display = "none";
          searchPapper.style.display = "none";
          imgInformContainer.style.display = "block";
        });
        
        // user see the product and when click the back btn
        backBtn.addEventListener('click',()=>{
          location.reload();
        })

        // Display the clicked product details in img-inform
        showProductDetails(listitems);
      });
      

    });
  
  }
};

searchBTN.addEventListener("click", () => {
  alert("😐😐sorry, enter your query in searchbox..");
});




// tostify library to show add product toast📺📺📺
function myToast() {
  Toastify({
    text: "add your product succesfully",
    duration: 1500,
    // destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "green",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};


// remove the item in transh box toast📺📺📺
function deletemyToast() {
  Toastify({
    text: "remove your item succesfully",
    duration: 1500,
    // destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "red",
      color:"white"
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};



// 💥💥show and hide the user cart section
const userBAG = document.querySelector(".shopping-cart");
const useritemsdiv = document.querySelector(".items-showing");

let bite = true;
userBAG.addEventListener("click", () => {
  userBAG.classList.remove("fa-shake");
  if (bite) {
    useritemsdiv.style.display = "block";
    bite = false;
  } else {
    useritemsdiv.style.display = "none";
    bite = true;
  }
});









// addto cart dynamics creation section🚀🚀🚀
const addCartButtons = document.querySelectorAll(".addcart-btn");
const totalBox = document.querySelector(".total-box");

// total product price varaible
let final = 0;
// userbag item nos varaible;
let bagpack = 0;

addCartButtons.forEach((cartBtn, index) => {
  cartBtn.addEventListener("click", (event) => {
    myToast();
    event.stopPropagation();
    event.preventDefault();

    // update the bagpack items value
    bagpack++;
    console.log(bagpack);

    const selectedProduct = myProducts[index];
    const isSameProduct = cartBtn.getAttribute("data-selected") === "true";
    console.log(isSameProduct);
    // Check if the selected item is the same as the currently selected item
    if (isSameProduct) {
      bagpack--;
       
      alert("This item is already in the cart! 😳 please check your cart.");
      return;
    }

    cartBtn.setAttribute("data-selected", "true");

    userBAG.setAttribute("data-content", bagpack);
    userBAG.classList.add("fa-shake");

    // Create a new 'my-items' div for the selected product
    const newItemDiv = document.createElement("div");
    newItemDiv.classList.add("my-items");

    // Create main elements for the new 'my-items' div
    const mainImage = document.createElement("main");
    mainImage.classList.add("product-image");
    const productImage = document.createElement("img");
    productImage.src = selectedProduct.image;
    mainImage.appendChild(productImage);

    const mainDetails = document.createElement("main");
    mainDetails.classList.add("product-details");
    const productName = document.createElement("h3");
    productName.textContent = selectedProduct.name;
    const productPrice = document.createElement("h5");
    productPrice.textContent = selectedProduct.price;
    const productQuantity = document.createElement("input");
    productQuantity.type = "number";
    mainDetails.appendChild(productName);
    mainDetails.appendChild(productPrice);
    mainDetails.appendChild(productQuantity);

    const mainDelete = document.createElement("main");
    mainDelete.classList.add("product-delete");
    const productDelete = document.createElement("i");
    productDelete.classList.add("fa-solid", "fa-trash","delete-item-icon");
    mainDelete.appendChild(productDelete);

    // Append the new main elements to the 'my-items' div
    newItemDiv.appendChild(mainImage);
    newItemDiv.appendChild(mainDetails);
    newItemDiv.appendChild(mainDelete);

    // Insert the new 'my-items' div above the 'total-box'
    totalBox.parentNode.insertBefore(newItemDiv, totalBox);

    console.log(newItemDiv);
    // 🤑🤑🤑🤑🤑final rate of total product

    const finalRATE = document.getElementById("finalprice");
    // Convert the product price string to a numeric value
    const productPriceNumeric = parseFloat(
      selectedProduct.price.replace("₹", "")
    );
    console.log(productPriceNumeric);
    // Add the product price to the total
    final += productPriceNumeric;
    // Update the total price in the UI
    finalRATE.textContent = `Total ₹${final.toFixed(2)}`;

    // click the trash box delete the cart item 😌😌😌
    productDelete.addEventListener("click", () => {
      deletemyToast();
      newItemDiv.style.display = "none";
      bagpack--;
      userBAG.setAttribute("data-content", bagpack);

      // Subtract the product price from the total when deleted
      final -= productPriceNumeric;

      // Update the total price in the UI after deletion
      finalRATE.textContent = `Total ₹${final.toFixed(2)}`;
      // 🚀🚀🚀when i was remove my item their data-seleted is false set
      cartBtn.setAttribute("data-selected", "false");
    });
  });
});




// all ITEMS remove🎴🎴🎴
function allitemsRemove(){
  let myslider=document.querySelector(".mySwiper");
  console.log(myslider);
  myslider.style.display = "none";
  
  sections.forEach((section) => {
    section.style.display = "none";
  });
}

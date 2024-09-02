const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

// https://kea-alt-del.dk/t7/api/products/1525

// fetch("https://kea-alt-del.dk/t7/api/products/1525")
//   .then((response) => response.json())
//   .then((data) => showProduct(data));

// Dynamisk:
function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(showProduct);
}

// Vi har brug for at gøre noget med dataen

function showProduct(product) {
  console.log(product);
  document.querySelector(".product-details h1").textContent = product.productdisplayname;
  document.querySelector(".product-details .product-category").textContent = product.category;
  document.querySelector(".product-details .product-brand").textContent = product.brandname;
  document.querySelector(".product-details .product-price").textContent = product.price;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img").alt = product.productdisplayname;
}

/* {
  "id": 1525,
  "gender": "Unisex",
  "category": "Accessories",
  "subcategory": "Bags",
  "articletype": "Backpacks",
  "basecolour": "Navy Blue",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Deck Navy Blue Backpack",
  "parsed": 1,
  "soldout": 0,
  "relid": 1525,
  "price": 1299,
  "discount": 55,
  "variantname": "Deck Backpack",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Unisex",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "<p>asfafaf<br> kasjhdkashd</p>",
  "styledesc": null
}*/

// Hent ID fra URL
const URLparams = new URLSearchParams(window.location.search);
const id = URLparams.get("id");

// API-URL med det valgte produkt-ID
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

// Dynamisk:
function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(showProduct);
}

// Vi har brug for at gøre noget med dataen

function showProduct(product) {
  console.log(product);

  // Purchase box
  kopi.querySelector(".product-name").textContent = product.productdisplayname;
  kopi.querySelector(".product-brand").textContent = product.brandname;
  document.querySelector(".product-category").textContent = product.category;
  document.querySelector(".product-price").textContent = product.price;

  // Produkt information
  document.querySelector(".product-description dd:nth-of-type(1)").textContent = product.variantname;
  document.querySelector(".product-description dd:nth-of-type(2)").textContent = product.basecolor;
  document.querySelector(".product-description dd:nth-of-type(3)").textContent = product.ID;

  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector("img").alt = product.productdisplayname;
}

getProduct();

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

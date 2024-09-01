// Hent produkter fra API
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

// Funktion til at vise alle produkter
function showProducts(products) {
  products.forEach(showProduct);
}

// Funktion til at vise et enkelt produkt
function showProduct(product) {
  // Find skabelonen
  const template = document.querySelector("#productTemplate").content;
  // Lav en kopi af skabelonen
  const clone = template.cloneNode(true);

  // Fyld klonen med produktdata
  clone.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  clone.querySelector("img").alt = product.productdisplayname;
  clone.querySelector(".product-name").textContent = product.productdisplayname;
  clone.querySelector(".product-category").textContent = product.subcategory;
  clone.querySelector(".product-price").textContent = `DKK ${product.price},-`;
  clone.querySelector(".product-link").href = `produktside${product.id}.html`;

  // Håndtering af udsolgte produkter
  if (product.soldout) {
    clone.querySelector(".sold-out-text").style.display = "block";
    clone.querySelector("article").classList.add("udsolgt");
  }

  // Tilføj klonen til produktlisten
  document.querySelector(".product-list").appendChild(clone);
}

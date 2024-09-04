fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  //.then(data=>showProducts(data)) => dette er en anden måde at skrive nedenstående kode på
  .then(showProducts);

function showProducts(products) {
  //looper igennem og kalder showPoduct (ental)
  products.forEach(showProduct);
}

// Udsolgt template

function showProduct(product) {
  /* console.log(product); */
  // fange template
  const template = document.querySelector("#productTemplate").content;
  // lave en kopi
  // (true) betyder at vi får 'børnene med' dvs. alt inde i vores template
  const kopi = template.cloneNode(true);
  //ændre indhold
  kopi.querySelector(".product-name").textContent = product.productdisplayname;
  kopi.querySelector(".product-brand").textContent = product.brandname;
  kopi.querySelector(".product-category").textContent = product.articletype;
  //   kopi.querySelector(".product-price").textContent = product.price;
  kopi.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  kopi.querySelector("img").alt = product.productdisplayname;
  // kopi.querySelector("a").href = `produktside1.html?id=${product.id}`;

  if (product.soldout) {
    // produktet er udsolgt
    kopi.querySelector("article").classList.add("udsolgt");
    kopi.querySelector(".sold_out_text").classList.remove("hide");
  }

  if (product.discount) {
    // Beregn den nedsatte pris
    const discountedPrice = Math.round(product.price * (1 - product.discount / 100));

    // Vis både den originale pris og den nedsatte pris
    kopi.querySelector(".original-price").textContent = `DKK ${product.price},-`;
    kopi.querySelector(".discounted-price").textContent = `DKK ${discountedPrice},-`;

    // Fjern klassen, hvis rabat elementet skulle være skjult
    kopi.querySelector(".rabat").classList.remove("hide");
  } else {
    // Hvis der ikke er rabat, vises kun prisen
    kopi.querySelector(".product-price").textContent = `DKK ${product.price},-`;
    // Skjul rabat sektionen
    kopi.querySelector(".rabat").classList.add("hide");
  }

  kopi.querySelector(".product-link").setAttribute("href", `produktside1.html?=${product.id}`);
  //appende (tilføje produkterne til main)
  document.querySelector("#product-list").appendChild(kopi);
}

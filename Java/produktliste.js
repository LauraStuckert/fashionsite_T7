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
  kopi.querySelector(".product-category").textContent = product.articletype;
  kopi.querySelector(".product-price").textContent = product.price;
  kopi.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  kopi.querySelector("img").alt = product.productdisplayname;
  kopi.querySelector("a").href = `product.html?id=${product.id}`;

  if (product.soldout) {
    // produktet er udsolgt
    kopi.querySelector("article").classList.add("udsolgt");
    kopi.querySelector(".sold_out_text").classList.remove("hide");
  }
  //appende (tilføje produkterne til main)
  document.querySelector("#product-list").appendChild(kopi);
}

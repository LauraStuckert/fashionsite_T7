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
  const template = document.querySelector("#productudsolgtTemplate").content;
  // lave en kopi
  // (true) betyder at vi får 'børnene med' dvs. alt inde i vores template
  const kopi = template.cloneNode(true);
  //ændre indhold
  kopi.querySelector("p").textContent = product.productdisplayname;

  if (product.soldout) {
    // produktet er udsolgt
    kopi.querySelector("article").classList.add("udsolgt");
  }
  //appende (tilføje produkterne til main)
  document.querySelector("main").appendChild(kopi);
}

/*
// produkt info som et objekt 

{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
*/

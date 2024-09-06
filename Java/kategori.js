fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

// if (params.has("category")) {
//   url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
// } else {
//   url = `https://kea-alt-del.dk/t7/api/products`;
// }

function showCategory(cat) {
  // Fanger vores template
  const template = document.querySelector("template").content;

  // Kopi
  const kopi = template.cloneNode(true);

  // Ændre indhold
  kopi.querySelector("a").textContent = cat.category;
  kopi.querySelector("a").href = `produktliste.html?category=${cat.category}`;
  // Appender
  document.querySelector(".category-list").appendChild(kopi);
}

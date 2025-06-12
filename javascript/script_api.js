// Wir machen eine leere Liste, in die später alle Produkte gespeichert werden
let allProducts = [];

// 🎯 Wir holen uns Dinge aus dem HTML
const searchInput = document.getElementById("searchInput"); // das Suchfeld
const loadButton = document.getElementById("loadButton"); // der "Laden"-Button
const productContainer = document.getElementById("productContainer"); // Bereich, wo Produkte angezeigt werden
const loading = document.getElementById("loading"); // das "Lade..."-Zeichen
const errorMessage = document.getElementById("errorMessage"); // Fehlernachricht

// 📢 Wir sagen dem Button und dem Eingabefeld, was passieren soll:
loadButton.addEventListener("click", loadProducts); // Wenn man auf den Button klickt: Produkte laden
searchInput.addEventListener("input", filterProducts); // Wenn man im Suchfeld tippt: Produkte filtern

// 🛒 Diese Funktion lädt Produkte von einer Webseite (API)
function loadProducts() {
  showLoading(true); // Zeige: "Wird geladen..."
  hideError(); // Verstecke alte Fehlermeldung

  // Wir holen Daten von dieser Adresse im Internet:
  fetch("https://dummyjson.com/products?limit=20")
    .then((response) => {
      // Wenn die Antwort NICHT ok ist, zeigen wir einen Fehler
      if (!response.ok) {
        throw new Error("Netzwerk-Fehler: " + response.status);
      }
      return response.json(); // Ansonsten: Daten als JSON lesen
    })
    .then((data) => {
      // Datenstruktur validieren
      if (!data.products || !Array.isArray(data.products)) {
        throw new Error("Ungültige API-Response");
      }
      console.log(data); // Schau dir an, was „data“ überhaupt ist!

      allProducts = data.products;
      showProducts(allProducts);
      showLoading(false); // "Wird geladen..." ausblenden
    })

    .catch((error) => {
      // Wenn etwas schiefgeht: Fehler in der Konsole + auf der Seite anzeigen
      console.error("Fehler:", error);
      showError("Fehler beim Laden der Produkte: " + error.message);
      showLoading(false); // "Wird geladen..." ausblenden
    });
}

// 🔍 Diese Funktion sucht nach Produkten, während man tippt
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase(); // Wir holen den Text aus dem Suchfeld

  // Wir suchen Produkte, bei denen Titel ODER Kategorie den Suchtext enthalten
  const filtered = allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );

  showProducts(filtered); // Zeige nur die passenden Produkte
}

// 🧾 Diese Funktion zeigt Produkte als HTML-Blöcke auf der Seite an
function showProducts(products) {
  // Wenn keine Produkte da sind:
  if (products.length === 0) {
    productContainer.innerHTML = "<p>Keine Produkte gefunden.</p>";
    return;
  }

  // Wir bauen HTML für alle Produkte zusammen:
  const html = products
    .map(
      (product) => `
        <div class="product">
          <img src="${product.thumbnail}" alt="${product.title}"
          style="width: 100%; height: 150px; object-fit: cover;">
          <h3>${product.title}</h3>
          <p class="category">${product.category.toUpperCase()}</p>
          <p class="price">€${product.price}</p>
          <p class="description">${product.description.substring(0, 100)}...</p>
        </div>
      `
    )
    .join(""); // Alle Blöcke zu einem Text verbinden

  productContainer.innerHTML = html; // HTML in den Container einfügen
}

// ⏳ Zeigt oder versteckt das Lade-Zeichen
function showLoading(show) {
  loading.style.display = show ? "block" : "none";
}

// ❌ Zeigt eine Fehlermeldung, wenn etwas schiefläuft
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

// ✅ Versteckt die Fehlermeldung
function hideError() {
  errorMessage.style.display = "none";
}

// Wir erstellen eine Liste (Array) mit Produkten. Jedes Produkt ist ein Objekt mit 'name' und 'price'.
const products = [
  { name: "Laptop", price: 455 },
  { name: "Handy", price: 4 },
  { name: "Tablet", price: 344 },
];

// Wir zeigen das erste Produkt im Array in der Konsole (Objekt mit name und price)
console.log(products[0]);

// Wir zeigen nur den Namen vom ersten Produkt (also "Laptop")
console.log(products[0].name);

// Wir zeigen das zweite Produkt (Handy)
console.log(products[1]);

// Wir zeigen das dritte Produkt (Tablet)
console.log(products[2]);

// Wir gehen durch jedes Produkt in der Liste und schreiben Name + Preis in die Konsole
products.forEach(function (product) {
  // product ist dabei jeweils ein einzelnes Produkt aus der Liste
  console.log(product.name + ": " + product.price);
});

// Jetzt wollen wir die Produkte auch im HTML auf der Webseite anzeigen

// Wir holen das HTML-Element mit der ID 'produktList' (z. B. ein <ul>)
const productList = document.getElementById("produktList");

// Für jedes Produkt in der Liste:
products.forEach((product) => {
  // Wir erstellen ein neues Listen-Element <li>
  const listItem = document.createElement("li");

  // Wir schreiben den Produktnamen und den Preis in das Element
  listItem.innerHTML = product.name + " - " + product.price + "Euro";

  // Wir fügen das Element zur Liste in der Webseite hinzu
  productList.appendChild(listItem);
});

// Jetzt bauen wir eine Suchfunktion, damit man Produkte filtern kann

// Wir holen das Eingabefeld mit der ID 'searchInput'
const suche = document.getElementById("searchInput");

// Wenn jemand in das Suchfeld schreibt:
suche.addEventListener("input", function (event) {
  // Wir holen den Text, den die Person eingibt, und machen ihn klein (z. B. "Laptop" → "laptop")
  const userInput = event.target.value.toLowerCase();

  // Wir suchen alle Produkte, deren Name den eingegebenen Text enthält
  const filtered = products.filter((product) => {
    return product.name.toLowerCase().includes(userInput);
  });

  // Bevor wir die neuen Ergebnisse anzeigen, leeren wir die alte Liste
  productList.innerHTML = "";

  // Jetzt fügen wir nur noch die gefilterten Produkte zur Liste hinzu
  filtered.forEach(function (product) {
    const listItem = document.createElement("li");
    listItem.innerHTML = product.name + " - " + product.price + "Euro";
    productList.appendChild(listItem);
  });
});

// Einfachste Form
// fetch("https://dummyjson.com/products?limit=5")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Anzahl Produkte:", data.products.length);

//     // Erstes Produkt anzeigen
//     const firstProduct = data.products[0];
//     console.log("Erstes Produkt:", firstProduct.title);
//     console.log("Preis vom ersten Produkt :", firstProduct.price);
//   });

// Diese Funktion zeigt Produkte im HTML an
function showProducts(products) {
  const container = document.getElementById("container"); // Holt das Container-DIV

  // Geht alle Produkte durch
  products.forEach((product) => {
    const productDiv = document.createElement("div"); // Erstellt ein neues <div>
    productDiv.className = "product"; // Gibt ihm die Klasse "product"

    // Fügt HTML-Code für Produktnamen und Preis ein
    productDiv.innerHTML = `
      <h3>${product.title}</h3>
      <p class="price">€${product.price}</p>
    `;

    // Hängt das Produkt-DIV in den Container
    container.appendChild(productDiv);
  });
}
// Nachher: Echte API-Daten

let allProducts = []; // Globale Variable für alle Produkte
function loadProducts() {
  fetch("https://dummyjson.com/products?limit=20")
    .then((response) => response.json())
    .then((data) => {
      allProducts = data.products;
      showProducts(allProducts); // Alle Produkte anzeigen
    })
    .catch((error) => {
      console.error("Fehler beim Laden der Produkte:", error);
      showError("Produkte konnten nicht geladen werden.");
    });
}

loadProducts();

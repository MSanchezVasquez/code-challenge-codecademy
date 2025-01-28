// Click handler for search button
const captureSearchValue = () => {
  const searchInput = document
    .querySelector("#search-bar")
    .value.trim()
    .toLowerCase();
  return searchInput;
};

// Filter books based on search input
const filterBooks = (searchString, books) => {
  const lowerSearchString = searchString.toLowerCase();

  return books.filter((book) => {
    const flattenedValues = flattenObjectValuesIntoArray([book]).flat();
    return flattenedValues.some(
      (value) => String(value).toLowerCase() === lowerSearchString
    );
  });
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
const structureBooksAsHtml = (filteredBooks) => {
  return filteredBooks.map((book) => structureBookAsHtml(book));
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  const searchString = captureSearchValue();
  const filteredBooks = filterBooks(searchString, books);
  const bookHtmlElements = structureBooksAsHtml(filteredBooks);

  const resultsContainer = document.getElementById("bookList"); // Contenedor donde se muestran los resultados
  resultsContainer.innerHTML = ""; // Limpia el contenedor
  bookHtmlElements.forEach((element) => resultsContainer.appendChild(element));
};

// Grab search button from the DOM
const searchBtn = document.querySelector("#search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => {
  searchBtnClickHandler(books);
});

const searchInput = document.querySelector("#search-bar");

searchInput.addEventListener("focus", () => {
  searchInput.dataset.placeholder = searchInput.placeholder; // Guarda el placeholder
  searchInput.placeholder = " "; // Borra el placeholder
});

// Cuando el input pierde foco
searchInput.addEventListener("blur", () => {
  searchInput.placeholder = searchInput.dataset.placeholder; // Restaura el placeholder
});

// Seleccionar el botón y añadir el evento de clic
const toggleButton = document.getElementById("dark-mode-toggle");

// Cambiar entre modo claro y oscuro
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Cambiar texto del botón
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Modo Claro";
  } else {
    toggleButton.textContent = "Modo Oscuro";
  }
});

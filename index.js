// Function to fetch data from API and render books
function fetchBooks() {
  const apiUrl = "https://anapioficeandfire.com/api/books";

  // Return the fetch promise
  return fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          renderBooks(data); // Pass fetched JSON data to render function
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}

// Function to render book titles into the DOM
function renderBooks(books) {
  const booksContainer = document.getElementById('booksContainer');

  books.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
      bookElement.innerHTML = `
          <h2 class="text-xl font-semibold">${book.name}</h2>
          <p>Authors: ${book.authors.join(', ')}</p>
          <p>Pages: ${book.numberOfPages}</p>
          <hr class="my-2">
      `;
      booksContainer.appendChild(bookElement);
  });
}

// Call fetchBooks when the page loads
document.addEventListener('DOMContentLoaded', fetchBooks);

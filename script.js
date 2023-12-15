// function to open search bar and close it with lisner to search button
function toggleSearchBar() {
  let searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.style.display =
      searchBar.style.display === 'none' || searchBar.style.display === '' ? 'block' : 'none';
  }
}
// to close search button window
function closeSearchBar() {
  let searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.style.display = 'none';
  }
}

let input = document.getElementById('search-input');
let searchBtn = document.getElementById('searchButton');

if (searchBtn && input) {
  const expand = () => {
    searchBtn.classList.toggle('close');
    input.classList.toggle('square');
  };

  searchBtn.addEventListener('click', expand);
}

// function show the message in contact us form
function showMessage() {
  // Retrieve input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const messageContent = document.getElementById('message').value;

  // Display the message container
  document.getElementById('messageContainer').classList.remove('hidden');

  // Set the message content
  const message = `Thanks for your interest, ${name} !.... We will get in touch with you soon as soon as possible.<br>
                    by Email: ${email}`;

  document.getElementById('messageContainer').innerHTML = message;

  // fuction to close and open the navbar in the header
  event.preventDefault();
}
function openNavbar() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}
function openNavbar() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}
// script.js

// Function to toggle the search button visibility and position based on scroll
function toggleSearchButtonVisibility() {
  var searchButton = document.getElementById('searchButton');

  // Check the scroll position
  if (window.scrollY > 100) {
    searchButton.style.display = 'block';

    // Calculate the top position based on the scroll position
    var topPosition = window.scrollY - 150 + 'px';
    searchButton.style.top = topPosition;
  } else {
    searchButton.style.display = 'none';
  }
}

// Event listener to call the function on scroll
window.addEventListener('scroll', toggleSearchButtonVisibility);

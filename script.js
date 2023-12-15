// function to open search bar and close it with lisner to search button
function toggleSearchBar() {
  let searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.style.display =
      searchBar.style.display === 'none' || searchBar.style.display === '' ? 'block' : 'none';
  }
}
// search button
// to close search button window
function closeSearchBar() {
  let searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.style.display = 'none';
  }
}
// when click open the search bar
let input = document.getElementById('search-input');
let searchBtn = document.getElementById('searchButton');

if (searchBtn && input) {
  const expand = () => {
    searchBtn.classList.toggle('close');
    input.classList.toggle('square');
  };

  searchBtn.addEventListener('click', expand);
}

function showMessage() {
  // Retrieve input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const messageContent = document.getElementById('message').value;

  // Display the message container
  document.getElementById('messageContainer').classList.remove('hidden');

  // Set the message content
  const message = `Thanks for your interest, ${name}! We will get in touch with you as soon as possible.<br>
                    by Email: ${email}`;

  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Set the message content after scrolling to the top
  document.getElementById('messageContainer').innerHTML = message;

  // Prevent the default form submission
  event.preventDefault();
}

// open nav bar function
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

/*
document.getElementByClass('searchButton').addEventListener('click', function() {
  document.getElementByClass('searchBar').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('searchBar').style.display = 'none';
});



function toggleSearch() {
  const searchBar = document.querySelector('.searchBar');
  searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
}

function closeSearch() {
  const searchBar = document.querySelector('.searchBar');
  searchBar.style.display = 'none';
}



// updated 2019
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);
*/

function showMessage() {
  // Retrieve input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const messageContent = document.getElementById("message").value;

  // Display the message container
  document.getElementById("messageContainer").classList.remove("hidden");

  // Set the message content
  const message = `Thanks for your interest, ${name} !.... We will get in touch with you soon as soon as possible.<br>
                    by Email: ${email}`;

  document.getElementById("messageContainer").innerHTML = message;

  // Prevent form submission
  event.preventDefault();
}
  function openNavbar() {
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.toggle("active");
  }
function openNavbar() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
}
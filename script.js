// function to open search bar and close it with lisner to search button
function toggleSearchBar() {
  let searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') ? 'block' : 'none';
  }
}

function closeSearchBar() {
  let searchBar = document.getElementById('searchBar');
  if (searchBar) {
    searchBar.style.display = 'none';
  }
}

let input = document.getElementById("search-input");
let searchBtn = document.getElementById("searchButton");

if (searchBtn && input) {
  const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
  };

  searchBtn.addEventListener("click", expand);
}



// function show the message in contact us form
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

  // fuction to close and open the navbar in the header 
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





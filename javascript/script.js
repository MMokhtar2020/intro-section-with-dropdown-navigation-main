function myFunction() {
  document.getElementById("features-sub-links").classList.toggle("active");
}



function myFunction2() {
  document.getElementById("company-sub-links").classList.toggle("active");
}

function mySide() {
  document.getElementById("nav").classList.toggle("active"),
  document.getElementById("icon-menu").classList.toggle("active"),
  document.getElementById("overlay").classList.toggle("active"),
  document.getElementById("icon-menu-close").classList.toggle("active");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("sub");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var headerContainer = document.getElementById("headercontainer");
var header = document.getElementById("head");
var stream = document.getElementById("stream");

// Get the offset position of the navbar
var sticky = 440;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    headerContainer.classList.add("sticky");
    header.classList.add("stick");
    stream.classList.add("headeroffset");
  } else {
    headerContainer.classList.remove("sticky");
    header.classList.remove("stick");
    stream.classList.remove("headeroffset");
  }
}

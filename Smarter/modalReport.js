// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

//Close Button Footer
var cBtn = document.getElementsByClassName("closeMBtn");

// When the user clicks the button, open the modal 
btn[3].onclick = function() {
    modal[3].style.display = "block";
}

// When the user clicks on <span> (x) / closeMBtn, close the modal
span[3].onclick = function() {
    modal[3].style.display = "none";
}

cBtn[3].onclick = function()
{
  modal[3].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal[3]) {
         modal[3].style.display = "none";
     }
}
'use strict';

var stickElem;
var stickyPoint;

window.addEventListener('load', (event) => {

    // initialBoot();

    window.addEventListener('scroll', (event) => {
        stickElement("header-stick")
    });
});

// function initialBoot() {
//     // Get the header
//     stickElem = document.getElementById("header-stick");

//     // Get the offset position of the header
//     stickyPoint = stickElem.offsetTop;
// }

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickElement(e) {

    // Get the header
    var stickElem = document.getElementById(e);
    // Get the offset position of the header
    var stickyPoint = stickElem.offsetTop;

    if (window.pageYOffset >= stickyPoint) {
        stickElem.classList.add("sticky")
    } else {
        stickElem.classList.remove("sticky");
    }
}
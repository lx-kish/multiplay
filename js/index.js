'use strict';

var stickElem;
var stickyPoint;

window.addEventListener('load', (event) => {

    initialBoot();

    window.addEventListener('scroll', (event) => {
        stickElement("header-stick")
    });

    var input = document.getElementById('collapsible-toggle');
    input.addEventListener('click', (event) => {
        initialBoot();
    });

    var inputNumber = document.querySelectorAll('input[type="number"]');

    for (var i = 0; i < inputNumber.length; i++) {

        inputNumber[i].addEventListener('keydown', (e) => {
            if (e.which === 38 || e.which === 40) {
                e.preventDefault();
            } else {
                //number validation
                // Use either which or keyCode, depending on browser support
                var char = e.which || e.keyCode; 
                if (!String.fromCharCode(char).match(/[0-9\.]/)) {
                    // console.log(char);//target.value);
                    return false;
                }
            }
        });
    }
});

function initialBoot() {
    // Get the header
    stickElem = document.getElementById("header-stick");

    // Get the offset position of the header
    stickyPoint = stickElem.offsetTop;
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickElement(e) {

    // console.log(`Y offset = ${window.pageYOffset}, sticky point = ${stickyPoint}`);

    if (window.pageYOffset >= stickyPoint) {
        stickElem.classList.add("sticky")
    } else {
        stickElem.classList.remove("sticky");
    }
}
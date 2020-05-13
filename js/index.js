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
                /* arrows up & down
                /* to prevent choosing right answer from keyboard 
                /* */
                e.preventDefault();
            } else {

                // // Use either which or keyCode, depending on browser support
                // var char = e.which || e.keyCode;
                // console.log(char);//target.value);
                // console.log((e.which >= 48 && e.which <= 57));
                // console.log(String.fromCharCode(char));//target.value);

                return (e.which >= 48 && e.which <= 57) //numbers
                    || e.which == 8  //backspace
                    || e.which == 46 //delete
                    || e.which == 9  //tab
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
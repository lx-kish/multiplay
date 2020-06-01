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

            if (fieldValidation(e)) {

                e.preventDefault();
            }

        });
    }
});

/**
 * Validate an input field for the range of criteria
 * @param  {event} e a fired event
 * @return {boolean} validation state
 */
function fieldValidation(e) {

    var value = true;

    // var char = e.which || e.keyCode;
    // console.log(String.fromCharCode(char));

    /* arrows up & down are allways denied
    * to prevent choosing right answer from keyboard 
    */
    if (e.which === 38 || e.which === 40) {
        return true;
    }

    /* delete, backspace and tab are always allowed 
    */
    if (e.which == 8  //backspace
        || e.which == 46 //delete
        || e.which == 9)  //tab
    {
        return false;
    }

    /* more than 2 digits in a 2-digits fields,
    * more than 3 digits in a 3-digits field
    * instant return to prevent overflowing
    */
    if ((e.target.max < 100 && e.target.value.length > 1) //length > 2
        || (e.target.max == 100 && e.target.value.length > 2)) //in "100" length > 3
    {
        return true;
    }

    /* any digits are allowed,
    * other symbols are not
    */
    // if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
    //     // 0-9 only
    //     value = false;
    // }

    /* https://stackoverflow.com/questions/13196945/keycode-values-for-numeric-keypad/13196983
    * The problem with keyCode is to avoid the combined keys
    * with the numbers on top of keyboard, we must add a check
    *  on the key "Shift" and "Alt" to avoid special characters
    * such as e @ & " { } ...
    */
    let key = Number(e.key)
    if (isNaN(key) || e.key === null || e.key === ' ') {
        // console.log("is not numeric");
        value = true;
    }
    else {
        // console.log("is numeric");
        value = false;
    }

    return value;
}

function initialBoot() {
    // Get the header
    stickElem = document.getElementById("header-stick");

    // Get the offset position of the header
    stickyPoint = stickElem.offsetTop;
}

/**
 * Add the sticky class to the header when you reach
 * its scroll position. Remove "sticky" when you
 * leave the scroll position
 */
function stickElement(e) {

    // console.log(`Y offset = ${window.pageYOffset}, sticky point = ${stickyPoint}`);

    if (window.pageYOffset >= stickyPoint) {
        stickElem.classList.add("sticky")
    } else {
        stickElem.classList.remove("sticky");
    }
}
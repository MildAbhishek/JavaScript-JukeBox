const buttons = document.querySelectorAll('.button'); // NodeList
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
/*
script.js:5 span#grey.button
script.js:5 span#white.button
script.js:5 span#blue.button
script.js:5 span#yellow.button
*/

  button.addEventListener('click', function (e) {
    console.log(e);
    /**
     * PointerEvent {isTrusted: true, pointerId: 2, width: 1, height: 1, pressure: 0, …}
     */
    console.log(e.target);
    /**
     * <span class="button" id="yellow"></span>
     */
    body.style.backgroundColor = e.target.id;
  });
});
const CHARACTER_COUNT = document.querySelector("#character-count");
const TEXTAREA = document.querySelector("#text");

//for repeated code used with multiple events
//provide array with event names
//and use forEach to iterate through
["keydown", "keyup"].forEach((EVT) => {
  TEXTAREA.addEventListener(EVT, () => {
    CHARACTER_COUNT.textContent = TEXTAREA.value.length;
  });
});

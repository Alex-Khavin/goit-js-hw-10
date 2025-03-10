import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let delay;
let state = "fulfilled";

const formSubmit = document.querySelector(".form");
const inputEl = document.querySelector("[name='delay']");
const radioEl = document.querySelectorAll("[name='state']");

formSubmit.addEventListener("submit", event => {
  event.preventDefault();
  
  createPromise(delay, state)
    .then(message => iziToast.show({
      message: `${message}`,
      position: 'topRight',
      color: 'green',
    }))
    .catch(error => iziToast.show({
      message: `${error}`,
      position: 'topRight',
      color: 'red',
    }));
});

inputEl.addEventListener("input", handlerInput);

function handlerInput(event) {
  delay = Number(event.target.value);
};

radioEl.forEach(radio => {
  radio.addEventListener("click", event => {
    state = event.target.value;
  });
});

function createPromise(delay, state) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(`✅ Fulfilled promise in ${delay} ms`);
      }
      reject(`❌ Rejected promise in ${delay} ms`);
      
    }, delay)
  })
}




  
  
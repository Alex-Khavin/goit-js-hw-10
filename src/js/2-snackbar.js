import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let state = "fulfilled";

const formSubmit = document.querySelector(".form");
const inputEl = document.querySelector("[name='delay']");
const radioEl = document.querySelectorAll("[name='state']");

formSubmit.addEventListener("submit", event => {
  event.preventDefault();

  const delay = Number(inputEl.value);
  
  createPromise(delay, state)
    .then(() => iziToast.show({
      message: `✅ Fulfilled promise in ${delay} ms`,
      messageColor: 'white',
      position: 'topRight',
      color: '#59a10d',
    }))
    .catch(() => iziToast.show({
      message: `❌ Rejected promise in ${delay} ms`,
      messageColor: 'white',
      position: 'topRight',
      color: '#ef4040',
    }));
});

radioEl.forEach(radio => {
  radio.addEventListener("click", event => {
    state = event.target.value;
  });
});

function createPromise(delay, state) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (state === "fulfilled") {
        resolve();
      }
      else {
        reject();
        }
    }, delay)
  })
}




  
  
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const btn = document.querySelector("button");
const inputEl = document.querySelector("input");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

btn.addEventListener("click", countTime);
btn.disabled = true;


let userSelectedDate;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (selectedDates[0] <= new Date()) {
            iziToast.show({
                message: 'Please choose a date in the future',
                messageColor: 'white',
                iconUrl: '../img/cancel-circle.svg',
                position: 'topRight',
                color: '#ef4040',
            });
            btn.disabled = true;
        }
        else {
            btn.disabled = false;
        }
        
    console.log(selectedDates[0]);
  },
};

function countTime() {
    clearInterval(intervalId);
    btn.disabled = true;
    inputEl.disabled = true;

    intervalId = setInterval(() => {
        const startTime = userSelectedDate;
        const finishTime = new Date();
        const time = startTime - finishTime;
        
        if (time <= 0) {
            clearInterval(intervalId);
            inputEl.disabled = false;
            return;
        }

        const timeResult = convertMs(time);
        updateTimerFace(timeResult);
    }, 1000);
}

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerFace({days, hours, minutes, seconds}) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours); 
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}
const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: "",
    message: "",
};

const feedbackForm = document.querySelector(".feedback-form");
const emailInput = feedbackForm.querySelector("input");
const textareaInput = feedbackForm.querySelector("textarea");

feedbackForm.addEventListener("submit", onFormSubmit);
emailInput.addEventListener("input", onInput);
textareaInput.addEventListener("input", onInput);

function onInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);

        if (parsedData.email) {
            formData.email = parsedData.email;
            emailInput.value = parsedData.email;
        }
        if (parsedData.message) {
            formData.message = parsedData.message;
            textareaInput.value = parsedData.message;
        }
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
     }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);

    form.reset();

    formData.email = "";
    formData.message = "";
}

loadFormData();


 
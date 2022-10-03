const newsletterForm = document.getElementById("newsletter-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const checkboxAll = document.getElementById("all");
const agreement1 = document.getElementById("agreement1");
const agreement2 = document.getElementById("agreement2");
const button = document.querySelector('input[type="submit"]');
const errorsList = document.querySelector(".errors");

const createLiElement = (text) => {
  let li = document.createElement("li");
  li.innerText = text;
  errorsList.appendChild(li);
};

const validate = (event) => {
  errorsList.innerHTML = "";

  if (nameInput.value.trim() === "") createLiElement("Wpisz imię i nazwisko");

  if (emailInput.value.trim() === "") createLiElement("Wpisz adres e-mail");

  if (!emailInput.value.includes("@"))
    createLiElement("Adres e-mail musi zawierać @");

  if (!agreement1.checked)
    createLiElement("Zgodą marketingowa 1 musi być zaznaczona");

  if (errorsList.children.length > 0) {
    event.preventDefault();
  }
};

const allCheckboxes = (event) => {
  agreement1.disabled = event.target.checked;
  agreement1.checked = event.target.checked;
  agreement2.disabled = event.target.checked;
  agreement2.checked = event.target.checked;
};

button.addEventListener("click", validate);

checkboxAll.addEventListener("change", allCheckboxes);

let form = document.getElementById("form");

const submitForm = (e) => {
  e.preventDefault();

  const fName = document.querySelector('[name="fname"]').value;
  const lName = document.querySelector('[name="lname"]').value;

  console.log(`Imię: ${fName} Nazwisko: ${lName}`);
};

form.addEventListener("submit", submitForm);

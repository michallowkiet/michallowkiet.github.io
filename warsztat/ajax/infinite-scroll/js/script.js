const loader = document.querySelector(".loader");
const counter = document.querySelector(".counter");
let endOfPageCounter = 0;
let preloading = false;

function showHidePreloader() {
  loader.classList.toggle("hide");
}

function scrollToEndOfPage() {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = Math.ceil(document.documentElement.scrollTop);
  const clientHeight = document.documentElement.clientHeight;

  if (clientHeight + scrollTop >= scrollHeight) {
    showHidePreloader();
    getData();
    endOfPageCounter++;
    counter.textContent = `Liczba pobrań: ${endOfPageCounter}`;
  }
}

function getData() {
  if (!preloading) {
    preloading = true;
    fetch("https://akademia108.pl/api/ajax/get-users.php")
      .then((res) => res.json())
      .then((data) => {
        const lastP = document.querySelector("p:last-of-type");
        let html = "";

        data.forEach((user) => {
          html += `
        <p>User ID: ${user.id}</p>
        <p>User Name: ${user.name}</p>
        <p>User URL: ${user.website}<br />--------</p>
        `;
        });

        lastP.insertAdjacentHTML("afterend", html);

        preloading = false;
        showHidePreloader();
      });
  }
}

window.addEventListener("scroll", scrollToEndOfPage);

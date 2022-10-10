const workers = document.querySelectorAll('[id^="pracownik"');
const btn = document.getElementById("oblicz");
const div = document.querySelector("h3").parentElement;

function calcSalary(time, rate) {
  const extraRate = rate * 2;
  let bonus = 0;
  let extraTime = 0;

  if (time > 160) {
    extraTime = time - 160;
    bonus = extraRate * extraTime;
  }

  return (time - extraTime) * rate + bonus;
}

function checkHours(time, element) {
  time < 100
    ? element.classList.add("bg-red")
    : element.classList.remove("bg-red");
}

function threeBestWorkers(workers) {
  return Array.from(workers)
    .sort((a, b) => {
      const timeA = a.querySelector(".czas").value * 1;
      const timeB = b.querySelector(".czas").value * 1;

      return timeB - timeA;
    })
    .slice(0, 3);
}

function displayList(list) {
  let html = "";
  list.forEach((el) => {
    html += `
      <li>${el.querySelector(".pracownik").textContent} - ${
      el.querySelector(".czas").value
    } godzin</li>
  
    `;
  });

  div.insertAdjacentHTML("beforeend", `<ul>${html}</ul>`);
}

btn.addEventListener("click", function () {
  const bestWorkers = threeBestWorkers(workers);
  displayList(bestWorkers);

  workers.forEach((worker) => {
    const time = worker.querySelector(".czas").value * 1;
    const rate = worker.querySelector(".stawka").value * 1;
    const salary = worker.querySelector(".wyplata");

    checkHours(time, worker);
    salary.textContent = calcSalary(time, rate);
  });
});

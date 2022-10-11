const students = document.querySelectorAll("[id^='uczen'");
const btnCalc = document.querySelector("#oblicz");

const recalculateGrades = (activities, el) =>
  el.value < 6 && activities.includes(el.getAttribute("class"))
    ? Number(el.value) + 0.5
    : Number(el.value);

const markRed = (el) => {
  if (Number(el.value) === 1) el.parentElement.classList.add("bg-red");
};

const markGreen = (avg, el) => {
  if (avg >= 4.75) el.classList.add("bg-green");
};

function avgCalc(grades) {
  let avg = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
  return avg > 6 ? Math.floor(avg) : avg;
}

function averageGrade() {
  students.forEach((student) => {
    const avgSpan = student.lastElementChild;
    const activities = student
      .querySelector('input[type="text"]')
      .value.split(",");
    const grades = [];

    [...student.children].forEach((el) => {
      if (el.matches("input[type='number']")) {
        grades.push(recalculateGrades(activities, el));
        markRed(el);
      }
    });

    const avg = avgCalc(grades);
    markGreen(avg, student);
    avgSpan.textContent = avg;
  });
}

btnCalc.addEventListener("click", () => {
  averageGrade();
});

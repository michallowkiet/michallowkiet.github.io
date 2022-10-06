const button = document.querySelector("button");

function displayData(data) {
  const html = `<div>
    <p>User ID: ${data.userId}</p>
    <p>ID: ${data.id}</p>
    <h3>${data.title}</h3>
    <p>${data.body}</p>
  </div>`;

  button.insertAdjacentHTML("afterend", html);
}

async function getData() {
  return fetch("https://akademia108.pl/api/ajax/get-post.php")
    .then((response) => response.json())
    .then((data) => displayData(data));
}

button.addEventListener("click", getData);

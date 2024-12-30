import "./css/app.css";

const app = document.getElementById("app");
const message = "Hello World!";

if (app) {
  app.innerHTML = `
  <h1>${message}</h1>
  `;
}

console.log(message);

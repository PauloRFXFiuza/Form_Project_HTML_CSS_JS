/* alert("TESTEEEEEEEEEEEEEEE"); */

const form = document.getElementsById("form");
const username = document.getElementsById("username");
const email = document.getElementsById("email");
const password = document.getElementsById("password");
const passwordConfirmation = document.getElementsById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Cadastrado com Sucesso.")
})
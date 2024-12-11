/* alert("TESTEEEEEEEEEEEEEEE"); */

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    /*alert("Cadastrado com Sucesso.");*/
    checkInputUsername();
})

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    
    textMessage.innerText = message;

    formItem.className = "form-content error";
}

function checkInputUsername(){
    const usernameValue = username.value;
    /* Apenas para testar se está funcionando 
    console.log(usernameValue);
    */

    if(usernameValue === ""){
        errorInput(username, "Favor Inserir. Preenchimento Obrigatório.")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }

}

function checkInputEmail(){
    const emailValue = email.value;
    /* Apenas para testar se está funcionando 
    console.log(emailValue);
    */
    if(emailValue === ""){
        errorInput(email, "Favor Inserir. Preenchimento Obrigatório.")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }

}

function checkInputPassword(){
    const passwordValue = password.value;
    /* Apenas para testar se está funcionando 
    console.log(passwordValue);
    */
    if(passwordValue === ""){
        errorInput(password, "Favor Inserir. Preenchimento Obrigatório.")
    }else if(password.length < 8){
        errorInput(password, "A senha necessita ter, no mínimo, 8 caracteres.");
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }

}

/* 
Função errorInput
A função errorInput em JavaScript é projetada para manipular a 
interface de usuário, exibindo uma mensagem de erro e alterando a 
aparência de um elemento do formulário, geralmente em resposta a alguma
 validação de entrada inválida.

Aqui está uma explicação linha por linha:

1. Definição da função
javascript
Copiar código
function errorInput(input, message) {
A função recebe dois parâmetros:
input: Representa um elemento de entrada (input) do DOM. Provavelmente 
é o campo que está associado ao erro (ex.: um campo de texto).
message: Uma string que contém a mensagem de erro que será exibida ao 
usuário.
2. Selecionar o elemento pai do input
javascript
Copiar código
const formItem = input.parentElement;
O método parentElement retorna o elemento pai direto do elemento input.
Supõe-se que o input esteja contido em um elemento pai que organiza ou 
estiliza o campo (ex.: <div> ou <fieldset>).
Esse formItem será o elemento onde a classe de erro será aplicada.
3. Localizar um elemento dentro do pai
javascript
Copiar código
const textMessage = formItem.querySelector("a");
O método querySelector("a") busca o primeiro elemento <a> (uma âncora) 
dentro de formItem.
Provavelmente, esse elemento <a> está sendo usado para exibir mensagens
 de erro ou algum tipo de feedback para o usuário.
4. Atualizar o texto da mensagem
javascript
Copiar código
textMessage.innerText = message;
O atributo innerText é usado para alterar o texto exibido dentro do
 elemento <a>.
A mensagem fornecida no parâmetro message é colocada como o texto 
visível no elemento <a>.
Isso atualiza o conteúdo dinamicamente para refletir a mensagem de 
erro apropriada.
5. Alterar a classe do elemento pai
javascript
Copiar código
formItem.className = "form-content error";
A propriedade className substitui todas as classes existentes do 
elemento formItem pela string "form-content error".
Isso geralmente é feito para aplicar estilos CSS que indicam um
 estado de erro (por exemplo, bordas vermelhas ou destaque no campo).
Nota importante: Como className substitui todas as classes, se 
formItem já tivesse outras classes, elas seriam removidas, o que
 pode ser um comportamento indesejado. Para preservar outras classes, 
 seria melhor usar classList.add.

Comportamento geral
Quando essa função é chamada:

Identificação do contexto do erro:
Localiza o elemento pai do input com o erro.
Busca um elemento <a> dentro desse pai para exibir a mensagem.
Exibição de erro ao usuário:
Altera o texto no elemento <a> para a mensagem fornecida.
Aplica uma classe ao elemento pai para indicar visualmente o erro 
(geralmente estilizado via CSS).

Exemplo de uso no DOM
HTML
html
Copiar código
<div class="form-content">
  <input type="text" id="username">
  <a class="error-message"></a>
</div>
Chamada da função
javascript
Copiar código
const inputElement = document.getElementById("username");
errorInput(inputElement, "O nome de usuário é obrigatório.");
Resultado esperado
Após a execução da função:

O conteúdo do elemento <a> será "O nome de usuário é obrigatório.".
A classe do elemento pai <div> será alterada para "form-content error",
 aplicando os estilos de erro.
Melhorias sugeridas
Preservar classes existentes: Em vez de sobrescrever todas as classes com className, use:

javascript
Copiar código
formItem.classList.add("error");
Validação de elementos existentes: Antes de acessar formItem ou 
textMessage, verifique se eles existem para evitar erros:

javascript
Copiar código
if (formItem && textMessage) {
    textMessage.innerText = message;
    formItem.classList.add("error");
}
*/
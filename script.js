/* alert("TESTEEEEEEEEEEEEEEE"); */

function isValidNumber(input) {
    const regex = /^\d{11}$/; // Apenas 11 dígitos numéricos - CPF, telefobe
    return regex.test(input);
}

function isValidNumber2(input) {
    const regex = /^\d{9}$/; // Apenas 9 dígitos numéricos - RG
    return regex.test(input);
}

function isValidNumber3(input) {
    const regex = /^\d{8}$/; // Apenas 8 dígitos numéricos - CEP
    return regex.test(input);
}

function isValidNumber4(input) {
    const regex = /^\d{1,6}$/; // Apenas 1 a 6 dígitos numéricos - nº de residência
    return regex.test(input);
}

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const endereco = document.getElementById("endereco");
const numeroResidencia = document.getElementById("numero-residencia");
const complemento = document.getElementById("complemento");
const bairro = document.getElementById("bairro");
const municipio = document.getElementById("municipio");
const uf = document.getElementById("uf");
const cep = document.getElementById("CEP");
const rg = document.getElementById("RG");
const cpf = document.getElementById("CPF");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
})

username.addEventListener("blur", () =>{
    checkInputUsername();
})
email.addEventListener("blur", () =>{
    checkInputEmail();
})
telephone.addEventListener("blur", () =>{
    checkInputTelephone();
})
telephone.addEventListener("blur", () =>{
    checkInputTelephone();
})
endereco.addEventListener("blur", () =>{
    checkInputEndereco();
})
numeroResidencia.addEventListener("blur", () =>{
    checkInputNumeroResidencia();
})
complemento.addEventListener("blur", () =>{
    checkInputComplemento();
})
bairro.addEventListener("blur", () =>{
    checkInputBairro();
})
municipio.addEventListener("blur", () =>{
    checkInputMunicipio();
})
uf.addEventListener("blur", () =>{
    checkInputUF();
})
cep.addEventListener("blur", () =>{
    checkInputCEP();
})
rg.addEventListener("blur", () =>{
    checkInputRG();
})
cpf.addEventListener("blur", () =>{
    checkInputCPF();
})
password.addEventListener("blur", () =>{
    checkInputPassword();
})
passwordConfirmation.addEventListener("blur", () =>{
    checkInputPasswordConfirmation();
})

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    
    textMessage.innerText = message;

    formItem.className = "form-content error";
}

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Favor Inserir. Preenchimento Obrigatório.");
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }

}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Favor Inserir. Preenchimento Obrigatório.");
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }

}

function checkInputTelephone(){
    const telephoneValue = telephone.value;

    if(isValidNumber(telephoneValue) === false){
        errorInput(telephone, "Favor Inserir um número de telefone correto. Preenchimento Obrigatório.");
    }else{
        const formItem = telephone.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputEndereco(){
    const enderecoValue = endereco.value;

    if(enderecoValue === ""){
        errorInput(endereco, "Favor Inserir. Preenchimento Obrigatório.");
    }else{
        const formItem = endereco.parentElement;
        formItem.className = "form-content";
    }

}

function checkInputNumeroResidencia(){
    const numeroResidenciaValue = numeroResidencia.value;

    if(isValidNumber4(numeroResidenciaValue) === false){
        errorInput(numeroResidencia, "Favor Inserir o número de sua Residência Corretamente. Preenchimento Obrigatório.");
    }else{
        const formItem = numeroResidencia.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputBairro(){
    const bairroValue = bairro.value;

    if(bairroValue === ""){
        errorInput(bairro, "Favor Inserir. Preenchimento Obrigatório.");
    }else{
        const formItem = bairro.parentElement;
        formItem.className = "form-content";
    }

}

function checkInputMunicipio(){
    const municipioValue = municipio.value;

    if(municipioValue === ""){
        errorInput(municipio, "Favor Inserir. Preenchimento Obrigatório.");
    }else{
        const formItem = municipio.parentElement;
        formItem.className = "form-content";
    }

}

function checkInputUF(){
    const ufValue = uf.value;

    if(ufValue === ""){
        errorInput(uf, "Favor Selecionar a UF de Sua Residência. Preenchimento Obrigatório.");
    }else{
        const formItem = uf.parentElement;
        formItem.className = "form-content";
    }

}

function checkInputCEP(){
    const cepValue = cep.value;

    if(isValidNumber3(cepValue) === false){
        errorInput(cep, "Favor Inserir um número de CEP correto. Preenchimento Obrigatório.");
    }else{
        const formItem = cep.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputRG(){
    const rgValue = rg.value;

    if(isValidNumber2(rgValue) === false){
        errorInput(rg, "Favor Inserir um número de RG correto. Preenchimento Obrigatório.");
    }else{
        const formItem = rg.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputCPF(){
    const cpfValue = cpf.value;

    if(isValidNumber(cpfValue) === false){
        errorInput(cpf, "Favor Inserir um número de CPF correto. Preenchimento Obrigatório.");
    }else{
        const formItem = cpf.parentElement;
        formItem.className = "form-content";
    }

}
function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "Favor Inserir. Preenchimento Obrigatório.");
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha necessita ter, no mínimo, 8 caracteres.");
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }

}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(passwordConfirmationValue === ""){
        errorInput(passwordConfirmation, "Favor Inserir. Confirmação de Senha Obrigatória.")
    }else if(passwordConfirmationValue !== passwordValue){
        errorInput(passwordConfirmation, "As Senhas Inseridas Não São Iguais. Favor Inserir Novamente a Senha e a Confirmação de Senha.")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content";
    }

}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputTelephone();
    checkInputEndereco();
    checkInputNumeroResidencia();
    checkInputBairro();
    checkInputMunicipio();
    checkInputUF();
    checkInputCEP();
    checkInputRG();
    checkInputCPF();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every( (item) =>{
        return item.className === "form-content"
    });

    if(isValid === true){
        alert("Cadastrado com Sucesso.");
        /*Comando abaixo atualiza a página utilizando o cache do navegador*/
        location.reload(false);
    }else{
        alert("Cadastro não Efetuado. Favor Preencher Dados Corretamente.");
    }
    /* Apenas para testar se está funcionando
    console.log(isValid);
    */
    
}

/*
5. Modificar o frontend para enviar dados
Adicione uma chamada fetch no script.js para enviar os dados ao backend.
*/

function enviarFormulario() {
    const dadosUsuario = {
        nome_completo: username.value,
        email: email.value,
        telefone: telephone.value,
        endereco: endereco.value,
        numero_residencia: numeroResidencia.value,
        complemento: complemento.value,
        bairro: bairro.value,
        municipio: municipio.value,
        uf: uf.value,
        cep: cep.value,
        rg: rg.value,
        cpf: cpf.value,
        senha: password.value,
    };

    fetch("http://localhost:3000/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosUsuario),
    })
        .then((response) => {
            if (response.ok) {
                alert("Usuário cadastrado com sucesso!");
            } else {
                alert("Erro ao cadastrar usuário.");
            }
        })
        .catch((error) => console.error("Erro:", error));
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
    if (form.querySelectorAll(".form-content.error").length === 0) {
        enviarFormulario();
    }
});


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
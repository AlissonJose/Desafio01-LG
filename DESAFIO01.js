/* Neste desafio o estudante deverá desenvolver uma função chamada criarUsuarioSenha(  ) que recebe como parâmetro o nome competlo do usuário imprime na tela ou retorno uma sugestão de nome de usuário e uma seha forte. */
const read = require("readline-sync")
var nome = read.question("Digite seu nome completo: ")
console.log("Seu nome completo é:", nome, "")

function getPassword() {
    var caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    var senhaLength = 20;
    var senha = "";

    for (var i = 0; i < senhaLength; i++) {
        var randomNumber = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.substring(randomNumber, randomNumber + 1);
        document.getElementById('senha').value = senha
return senha;
}
}
// Pegando no main o input com id='slider'.
let inputSlider = document.querySelector('#slider');

// Pegando no main o button com id='button'.
let buttonGerarSenha = document.querySelector('#button');

// Fazendo a quantidade de senha escolhida aparecer no container-input span com id='valor'.
let qtdNumEscol = document.querySelector('#valor');

// Na div com id='container-password' no span com id='password' aparece a senha.
let password = document.querySelector('#password');

// Desativando a hide na div class='hide' para aparecer a senha
let containerPassword = document.querySelector('#container-password');

// Numeros e letras e simbolos que serão gerados quando clicado no botão "Gerar Senha".
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*?!@#.:";

// Nova senha.
let novaSenha = '';

// Mostrando senha escolhida aparecer no container-input span com id='valor'.
qtdNumEscol.innerHTML = inputSlider.value;

// Fazendo com que a quantidade de numeros da senha apareça qdo movimenta o slider.
slider.oninput = function () {
    qtdNumEscol.innerHTML = this.value;
}

// Criando função para gerar a senha.
function generatePasswor () {
    let pass = '';
    for (let i = 0, n = charset.length; i < inputSlider.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));

    }
    // Desativando o hide.
    containerPassword.classList.remove("hide");
    // Mostrando a div no HTML
    password.innerHTML = pass;
    // Passando para variavel novaSenha  o pass.
    novaSenha = pass;
}

// Quando clicar no botão copiar, vai copiar a senha.
function copyPasword () {
    alert("SENHA COPIADA COM SUCESSO!");
    // Acesando nova senha.
    navigator.clipboard.writeText(novaSenha);
}


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.register-link a'); 
const registerLink = document.querySelector('.login-link a'); 
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicou em Cadastrar");
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Clicou em Acessar");
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
});

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  // Usuário e senha "fixos" só para teste
  const usuarioCorreto = "admin@gmail.com";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    mensagem.style.color = "#162938";
    mensagem.textContent = "✅ Login realizado com sucesso!";
    // redireciona após 1 segundo
    setTimeout(() => {
      window.location.href =  "index.html";
    }, 9.000);
    return false;
  } else {
    mensagem.style.color = "#162938";
    mensagem.textContent = "❌ Usuário ou senha incorretos!";
    return false;
  }
}


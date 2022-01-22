const botaoCalcular = document.querySelector('#calcular');
const botaoLimpar = document.querySelector('#limpar');


function imc() {
  const altura = document.querySelector('#altura').value;
  const peso = document.querySelector('#peso').value;
  const resultado = document.querySelector('#resultado');

  if(altura !== '' && peso !== '') {
    let soma = (peso / (altura * altura)).toFixed(2);
    resultado.textContent = 'Seu IMC: ' + soma;
  } else {
    resultado.textContent = 'Preencha todos os campos!!!';
  }
}

function limpar() {
  altura.value = '';
  peso.value = '';
  imc(); 
  resultado.textContent = 'Seu IMC:';
}

botaoCalcular.addEventListener('click', imc);
botaoLimpar.addEventListener('click', limpar);
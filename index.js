function logDadoFormulario () {


  if (validarFormulario()) {
    salvarLocalStorage()
    fecharModal()
    esvaziarCampos()
  }
}

function esvaziarCampos () {
  let nomeEntrada = document.getElementById('exampleInputName');
  let emailEntrada = document.getElementById('exampleInputEmail1');
  let mensagemEntrada = document.getElementById('exampleFormControlTextarea1');

  nomeEntrada.value = ''
  emailEntrada.value = ''
  mensagemEntrada.value = ''
}

function limparFormulario () {
  let modal = document.getElementById("formularioFaleConosco")
  modal.reset()
}

function salvarLocalStorage () {
  let nomeEntrada = document.getElementById('exampleInputName');
  let emailEntrada = document.getElementById('exampleInputEmail1');
  let mensagemEntrada = document.getElementById('exampleFormControlTextarea1');

  let nome = JSON.parse(localStorage.getItem('nome')) || []
  let email = JSON.parse(localStorage.getItem('email')) || []
  let mensagem = JSON.parse(localStorage.getItem('mensagem')) || []
  let nomeString = JSON.stringify([...nome, nomeEntrada.value])
  let emailString = JSON.stringify([...email, emailEntrada.value])
  let mensagemString = JSON.stringify([...mensagem, mensagemEntrada.value])

  localStorage.setItem('nome', nomeString)
  localStorage.setItem('email', emailString)
  localStorage.setItem('mensagem', mensagemString)
}


function validarFormulario () {

  let nomeEntrada = document.getElementById('exampleInputName');
  let emailEntrada = document.getElementById('exampleInputEmail1');
  let mensagemEntrada = document.getElementById('exampleFormControlTextarea1');

  if (!nomeEntrada.value) {
    nomeEntrada.classList.add('is-invalid');
    return false;
  } else {
    nomeEntrada.classList.remove('is-invalid');
  }

  if (!emailEntrada.value || !emailEntrada.checkValidity()) {
    emailEntrada.classList.add('is-invalid');
    return false;
  } else {
    emailEntrada.classList.remove('is-invalid');
  }

  if (!mensagemEntrada.value) {
    mensagemEntrada.classList.add('is-invalid');
    return false;
  } else {
    mensagemEntrada.classList.remove('is-invalid');
  }
  return true;
}

function fecharModal () {
  let modal = document.getElementById("modalFaleConosco")
  modal.style.display = "none"
  document.body.classList.remove("modal-open");
  document.getElementsByClassName("modal-backdrop")[0].remove();
}

function chamadaSigno (signo) {
  let options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '73f487b3e4mshe2ae20c38e6285dp13d781jsnb8cd34a44270',
      'X-RapidAPI-Host': 'horoscope-api.p.rapidapi.com'
    }
  }
  
  fetch(`https://horoscope-api.p.rapidapi.com/pt/${signo}`, options)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      const horoscopoData = document.getElementById('horoscopoDataDiv')
      horoscopoData.innerHTML = `Data: ${data.date}`
      horoscopoData.style.color = "#ffd700"
      horoscopoData.style.backgroundColor = "rgb(80, 9, 80)"

      const horoscopoTitulo = document.getElementById('horoscopoTituloDiv')
      horoscopoTitulo.innerHTML = data.title
      horoscopoTitulo.style.color = "#ffd700"
      horoscopoTitulo.style.backgroundColor = "rgb(80, 9, 80)"
      
      const horoscopoTexto = document.getElementById('horoscopoTexto')
      horoscopoTexto.innerHTML = data.text
      horoscopoTexto.style.color = "#ffd700"
      horoscopoTexto.style.backgroundColor = "rgb(80, 9, 80)"
            
    })
    .catch(error => {
      console.error(error)
    })
}

function fecharHoroscopo() {
  const horoscopoData = document.getElementById('horoscopoDataDiv')
      horoscopoData.style.color = "transparent"
      horoscopoData.style.backgroundColor = "transparent"

      const horoscopoTitulo = document.getElementById('horoscopoTituloDiv')
      horoscopoTitulo.style.color = "transparent"
      horoscopoTitulo.style.backgroundColor = "transparent"
      
      const horoscopoTexto = document.getElementById('horoscopoTexto')
      horoscopoTexto.style.color = "transparent"
      horoscopoTexto.style.backgroundColor = "transparent"
}
/* Desenvolva sua lógica aqui ... */

// Selecionando o elemento HTML button
const buttonTheme = document.querySelector(".theme");

// Selecionando o elemento HTML body
const body = document.querySelector("body");

// Guardando o nome da classe que contém o modo dark
const theme = "dark-mode";

// Armazenando dois possíveis textos para o elemento button em um array
const themeButtonText = [`<img src="assets/img/moon.png" alt="">`,`<img src="assets/img/sun.png" alt="">`];

// Guardando o estado do tema que começa como undefined por padrão
let darkMode;

buttonTheme.addEventListener("click", themeChange);


function themeChange() {
  
    // Invertendo o estado da nossa variável darkMode
    darkMode = !darkMode;
  
    // Acessando a const body e adicionando ou removendo a classe dark-mode
    body.classList.toggle(theme);
  
    // Acessando o localStorage e usando o método setItem
    localStorage.setItem(theme, darkMode);
  
    // Chamando a função responsável por mudar o texto do botão
    themeChangeButtonText(buttonTheme);
  }

  function themeChangeButtonText(ButtonElement) {

    // Analsiando o estado do tema
    darkMode
      ? (ButtonElement.innerHTML = themeButtonText[1])
      : (ButtonElement.innerHTML = themeButtonText[0]);
  }

  function themePreferenceAnalysis() {

    //re-atribuindo o valor do estado
    darkMode = JSON.parse(localStorage.getItem(theme));
  
    //verificando condição do estado
    if (darkMode) {
  
    //caso seja verdadeiro, troca para dark-mode
      themeChangeButtonText(buttonTheme);
      body.classList.add(theme);
    } else {
      themeChangeButtonText(buttonTheme);
    }
  }
  
  // Invocando a função em escopo global para iniciar toda vez que a página é carregada
  themePreferenceAnalysis();
// ==============================
// Counter App - JavaScript puro
// Interfaccia creata dinamicamente via DOM
// ==============================

// Stato iniziale del counter recuperato da localStorage, se presente
let counterValue = Number(localStorage.getItem("counterValue")) || 0;

// Elementi globali
let counterDisplay;

// Funzione per salvare il valore nel browser
function saveCounterValue() {
  localStorage.setItem("counterValue", counterValue);
}

// Funzione per aggiornare la visualizzazione del counter
function updateDisplay() {
  counterDisplay.textContent = counterValue;

  counterDisplay.classList.remove("positive", "negative", "animate");

  if (counterValue > 0) {
    counterDisplay.classList.add("positive");
  } else if (counterValue < 0) {
    counterDisplay.classList.add("negative");
  }

  // Piccola animazione a ogni aggiornamento
  counterDisplay.classList.add("animate");
  setTimeout(() => {
    counterDisplay.classList.remove("animate");
  }, 200);

  saveCounterValue();
}

// Funzione per incrementare
function incrementCounter() {
  counterValue++;
  updateDisplay();
}

// Funzione per decrementare
function decrementCounter() {
  counterValue--;
  updateDisplay();
}

// Funzione per resettare
function resetCounter() {
  counterValue = 0;
  updateDisplay();
}

// Funzione per creare un bottone
function createButton(text, className, onClickHandler) {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = className;
  button.addEventListener("click", onClickHandler);
  return button;
}

// Funzione per costruire l'interfaccia
function createCounterApp() {
  const app = document.createElement("main");
  app.className = "counter-app";

  const title = document.createElement("h1");
  title.className = "counter-title";
  title.textContent = "Counter App";

  const subtitle = document.createElement("p");
  subtitle.className = "counter-subtitle";
  subtitle.textContent = "Contatore realizzato con JavaScript puro e DOM manipulation";

  counterDisplay = document.createElement("div");
  counterDisplay.className = "counter-value";
  counterDisplay.setAttribute("aria-live", "polite");

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "counter-buttons";

  const decrementButton = createButton("−", "btn-decrement", decrementCounter);
  const incrementButton = createButton("+", "btn-increment", incrementCounter);
  const resetButton = createButton("Reset", "btn-reset", resetCounter);

  const note = document.createElement("p");
  note.className = "counter-note";
  note.textContent = "Il valore viene salvato automaticamente nel browser.";

  buttonsContainer.appendChild(decrementButton);
  buttonsContainer.appendChild(incrementButton);

  app.appendChild(title);
  app.appendChild(subtitle);
  app.appendChild(counterDisplay);
  app.appendChild(buttonsContainer);
  app.appendChild(resetButton);
  app.appendChild(note);

  document.body.appendChild(app);

  updateDisplay();
}

// Avvio applicazione
document.addEventListener("DOMContentLoaded", createCounterApp);
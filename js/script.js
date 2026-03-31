"use strict";

/* Counter App
   - Interfaccia generata dinamicamente via DOM
   - Responsabilità separate
   - Persistenza tramite localStorage */

const STORAGE_KEY = "counterValue";

/**
 * Recupera il valore iniziale del counter dal localStorage.
 * Se il valore non esiste o non è valido, restituisce 0.
 * @returns {number}
 */
function getInitialCounterValue() {
  const savedValue = Number(localStorage.getItem(STORAGE_KEY));
  return Number.isNaN(savedValue) ? 0 : savedValue;
}

/**
 * Salva il valore corrente del counter nel localStorage.
 * @param {number} value
 */
function saveCounterValue(value) {
  localStorage.setItem(STORAGE_KEY, String(value));
}

/**
 * Aggiorna il contenuto e lo stile del display.
 * Questa funzione si occupa solo del rendering.
 * @param {HTMLElement} displayElement
 * @param {number} value
 */
function renderCounterValue(displayElement, value) {
  displayElement.textContent = value;

  displayElement.classList.remove("positive", "negative", "animate");

  if (value > 0) {
    displayElement.classList.add("positive");
  } else if (value < 0) {
    displayElement.classList.add("negative");
  }

  displayElement.classList.add("animate");

  setTimeout(() => {
    displayElement.classList.remove("animate");
  }, 200);
}

/**
 * Crea un elemento HTML con eventuale classe e contenuto testuale.
 * @param {string} tagName
 * @param {string} className
 * @param {string} textContent
 * @returns {HTMLElement}
 */
function createElement(tagName, className = "", textContent = "") {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

/**
 * Crea un bottone configurato con testo, classe ed event handler.
 * @param {string} label
 * @param {string} className
 * @param {Function} eventHandler
 * @returns {HTMLButtonElement}
 */
function createButton(label, className, eventHandler) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.addEventListener("click", eventHandler);

  return button;
}

/**
 * Costruisce dinamicamente tutta l'applicazione.
 */
function createCounterApp() {
  let counterValue = getInitialCounterValue();

  const appContainer = createElement("main", "counter-app");

  const titleElement = createElement("h1", "counter-title", "Counter App");
  const subtitleElement = createElement(
    "p",
    "counter-subtitle",
    "Applicazione realizzata in JavaScript puro con interfaccia generata dinamicamente tramite DOM manipulation."
  );

  const counterDisplayElement = createElement("div", "counter-value");
  counterDisplayElement.setAttribute("aria-live", "polite");
  counterDisplayElement.setAttribute("aria-label", "Valore corrente del counter");

  const buttonsContainer = createElement("div", "counter-buttons");

  /**
   * Sincronizza stato, interfaccia e persistenza.
   * @param {number} newValue
   */
  function syncCounter(newValue) {
    counterValue = newValue;
    renderCounterValue(counterDisplayElement, counterValue);
    saveCounterValue(counterValue);
  }

  const decrementButton = createButton("−", "btn-decrement", () => {
    syncCounter(counterValue - 1);
  });

  const incrementButton = createButton("+", "btn-increment", () => {
    syncCounter(counterValue + 1);
  });

  const resetButton = createButton("Reset", "btn-reset", () => {
    syncCounter(0);
  });

  const noteElement = createElement(
    "p",
    "counter-note",
    "Funzionalità extra: il valore viene salvato automaticamente nel browser tramite localStorage."
  );

  buttonsContainer.appendChild(decrementButton);
  buttonsContainer.appendChild(incrementButton);

  appContainer.appendChild(titleElement);
  appContainer.appendChild(subtitleElement);
  appContainer.appendChild(counterDisplayElement);
  appContainer.appendChild(buttonsContainer);
  appContainer.appendChild(resetButton);
  appContainer.appendChild(noteElement);

  document.body.appendChild(appContainer);

  renderCounterValue(counterDisplayElement, counterValue);
}

createCounterApp();

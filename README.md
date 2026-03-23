# Counter App

Semplice applicazione web che simula il comportamento di un counter (contatore), realizzata interamente in **JavaScript puro**.

## Descrizione del progetto

L'applicazione permette all'utente di:

- visualizzare un valore iniziale del counter impostato a **0**
- aumentare il valore tramite il pulsante **+**
- diminuire il valore tramite il pulsante **−**
- resettare il valore tramite un pulsante **Reset**

L'interfaccia è stata creata **dinamicamente tramite JavaScript**, utilizzando la manipolazione del DOM, come richiesto dalla consegna.

## Tecnologie utilizzate

- HTML5
- CSS3
- JavaScript Vanilla

## Funzionalità principali

- Creazione dinamica dell'interfaccia con JavaScript
- Incremento e decremento del valore del counter
- Reset del contatore
- Salvataggio automatico del valore tramite `localStorage`
- Aggiornamento visivo del counter in base al valore:
  - verde se positivo
  - rosso se negativo
  - colore neutro se uguale a zero

## Live demo
https://69c1965b988c961bf57cea84--luminous-griffin-8f6308.netlify.app

## Struttura del progetto
```text
counter-app/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    └── script.js

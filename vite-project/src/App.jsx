import { useState } from "react";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);

  const updateProductQuantity = (name, quantity) => {
    setAddedProducts((curr) =>
      curr.map((p) => {
        if (p.name === name) {
          return {
            ...p,
            quantity,
          };
        }
        return p;
      })
    );
  };

  const addToCart = (prodotto) => {
    const alreadyAddedProduct = addedProducts.find(
      (p) => p.name === prodotto.name
    );

    if (alreadyAddedProduct) {
      updateProductQuantity(
        alreadyAddedProduct.name,
        alreadyAddedProduct.quantity + 1
      );
      return;
    }

    const productToAdd = {
      ...prodotto,
      quantity: 1,
    };
    setAddedProducts((curr) => [...curr, productToAdd]);
  };

  const removeFromCart = (prodotto) => {
    setAddedProducts((curr) => curr.filter((p) => p.name !== prodotto.name));
  };

  const totalToPay = addedProducts.reduce(
    (acc, p) => acc + p.price * p.quantity,
    0
  );

  return (
    <>
      <h1>Prodotti tra cui scegliere</h1>
      <ul>
        {products.map((product, i) => {
          return (
            <li key={i}>
              <p>
                {product.name} ({product.price.toFixed(2)} $)
              </p>
              <button onClick={() => addToCart(product)}>
                Aggiungi al carrello
              </button>
            </li>
          );
        })}
      </ul>
      {addedProducts.length > 0 && (
        <>
          <h2>Carrello</h2>
          <ul>
            {addedProducts.map((product, i) => {
              return (
                <li key={i}>
                  <p>
                    {product.quantity} x {product.name} (
                    {product.price.toFixed(2)} $)
                  </p>
                  <button onClick={() => removeFromCart(product)}>
                    Rimuovi dal carrello
                  </button>
                </li>
              );
            })}
          </ul>
          <h3>Totale da pagare: {totalToPay.toFixed(2)} $</h3>
        </>
      )}
    </>
  );
}

export default App;

// 📌 Milestone 1: Mostrare la lista dei prodotti
// 1. Parti dall’array products fornito:
// const products = [
//   { name: 'Mela', price: 0.5 },
//   { name: 'Pane', price: 1.2 },
//   { name: 'Latte', price: 1.0 },
//   { name: 'Pasta', price: 0.7 },
// ];
// Crea un componente che mostra la lista dei prodotti.
// Per ogni prodotto, mostra:
// Nome
// Prezzo
// Quantità

// Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.

// 📌 Milestone 2: Aggiungere prodotti al carrello

// Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
// Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
// Al click del bottone, usa una funzione addToCart per:
// Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
// Se il prodotto è già nel carrello, ignora l’azione.
// Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
// Per ogni prodotto nel carrello, mostra:
// Nome
// Prezzo
// Quantità

// Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.

// 📌 Milestone 3: Modificare il carrello

// Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:
// Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.
// Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":
// Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello.
// Sotto alla lista del carrello, mostra il totale da pagare:
// Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.

// Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico.

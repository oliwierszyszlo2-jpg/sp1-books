import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Podłączenie Bootstrapa

function App() {
  // Stan dla pól formularza
  const [tytul, setTytul] = useState('');
  const [autor, setAutor] = useState('');
  const [gatunek, setGatunek] = useState('');

  // Słownik mapujący wartości numeryczne z opcji na nazwy tekstowe gatunków
  const nazwyGatunkow = {
    "1": "Powieść",
    "2": "Kryminał",
    "3": "Fantastyka",
    "4": "Biografia"
  };

  // Obsługa wysłania formularza
  const handleSubmit = (e) => {
    e.preventDefault(); // Zapobieganie domyślnemu przeładowaniu strony przez przeglądarkę
    
    // Pobranie tekstowej nazwy gatunku na podstawie wybranej wartości
    const nazwaGatunku = nazwyGatunkow[gatunek] || "";

    // Wypisanie danych w konsoli w wymaganej przez arkusz formacie
    console.log(`tytul: ${tytul}; autor: ${autor}; gatunek: ${nazwaGatunku}`);
  };

  return (
    <div className="container mt-4" style={{ padding: '20px' }}>
      <h2>Dodaj nową książkę</h2>
      <form onSubmit={handleSubmit}>
        {/* Pole tekstowe: Tytuł książki */}
        <div className="mb-3">
          <label htmlFor="tytulKsiazki" className="form-label">Tytuł książki</label>
          <input 
            type="text" 
            className="form-control" 
            id="tytulKsiazki" 
            value={tytul}
            onChange={(e) => setTytul(e.target.value)}
          />
        </div>

        {/* Pole tekstowe: Autor książki */}
        <div className="mb-3">
          <label htmlFor="autorKsiazki" className="form-label">Autor książki</label>
          <input 
            type="text" 
            className="form-control" 
            id="autorKsiazki" 
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>

        {/* Lista rozwijana: Gatunek */}
        <div className="mb-3">
          <label htmlFor="gatunek" className="form-label">Gatunek</label>
          <select 
            className="form-select" 
            id="gatunek"
            value={gatunek}
            onChange={(e) => setGatunek(e.target.value)}
          >
            <option value=""></option>
            <option value="1">Powieść</option>
            <option value="2">Kryminał</option>
            <option value="3">Fantastyka</option>
            <option value="4">Biografia</option>
          </select>
        </div>

        {/* Przycisk wysyłający formularz */}
        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    </div>
  );
}

export default App;
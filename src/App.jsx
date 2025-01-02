import React, { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");
  const [classeResultado, setClasseResultado] = useState("");

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const imc = (parseFloat(peso) / (alturaMetros ** 2)).toFixed(2);

    let classificacao = "";
    let classe = "";
    let emoji = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
      classe = "abaixo-peso";
      emoji = "😃"; // Alegre
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
      classe = "peso-normal";
      emoji = "😊"; // Feliz
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
      classe = "sobrepeso";
      emoji = "😐"; // Neutro
    } else {
      classificacao = "Obesidade";
      classe = "obesidade";
      emoji = "😟"; // Preocupado
    }

    setResultado(`Seu IMC é ${imc} (${classificacao})${emoji}`);
    setClasseResultado(classe);
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="form">
        <label>
          Altura (cm):
          <input
           placeholder='Digite a sua altura: exemplo 140cm'
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </label>
        <label>
          Peso (kg):
          <input
          placeholder='Digite o seu Peso:exemplo 60kg'
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>
        <button onClick={calcularIMC}>Calcular</button>
      </div>
      {resultado && (
        <div className={`resultado ${classeResultado}`}>{resultado}</div>
      )}
    </div>
  );
}

export default App;

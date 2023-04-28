import { useState } from 'react';

export default function Emater() {
    const [result, setResult] = useState(null)
    const [ears, setEars] = useState('')
    const [avg_weight, setWeight] = useState('')
    const [spacing, setSpacing] = useState('')

    function calculate() {
        setResult((ears * avg_weight * 10000) / (spacing * 100))
    }

    return (
        <div>
            <h1>Método de Cáculo do EMATER</h1>
            <p>Insira o número de espigas em 10m lineares, peso médio dos grãos (em gramas) de 3 espigas coletadas e o espaçamento (em centímetros):</p>
            <input title='Número de espigas em 10m lineares' type="number" value={ears} onChange={e => setEars(e.target.value)} />
            <input title='Peso médio (g)' type="number" value={avg_weight} onChange={e => setWeight(e.target.value)} />
            <input title='Espaçamento (cm)' type="number" value={spacing} onChange={e => setSpacing(e.target.value)} />
            <button onClick={calculate}>Calcular</button>
            {result !== null && <p>The yield is: {result}</p>}
        </div>
    )
}
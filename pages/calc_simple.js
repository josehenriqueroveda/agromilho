import { useState } from 'react';

export default function Simple() {
    const [result, setResult] = useState(null)
    const [avg_weight, setWeight] = useState('')
    const [population, setPopulation] = useState('')

    function calculate() {
        setResult((avg_weight / 1000) * population)
    }

    return (
        <div>
            <h1>Método Simples de Cáculo</h1>
            <p>Insira o peso médio dos grãos das espigas selecionadas (em gramas) e a população de plantas por hectare:</p>
            <input title='Peso Médio (g)' type="number" value={avg_weight} onChange={e => setWeight(e.target.value)} />
            <input title='População (plantas/ha)' type="number" value={population} onChange={e => setPopulation(e.target.value)} />
            <button onClick={calculate}>Calcular</button>
            {result !== null && <p>The yield is: {result}</p>}
        </div>
    )
}

import { useState } from 'react';
import Head from 'next/head';

function calculateLimestone(ctc, v2, prnt, cact, ph, ic, sd) {
    /**
    ctc: capacidade de troca de cátions (em cmolc/dm³)
    v2: saturação por bases desejada (em porcentagem)
    prnt: poder relativo de neutralização total do calcário (em porcentagem)
    cact: capacidade de neutralização do calcário (em porcentagem)
    sd: densidade do solo (em g/cm³)
    ic: incorporação do calcário (em porcentagem)
    nca: necessidade de calcário a ser aplicada (em toneladas por hectare)
    nc: necessidade de calcário (kg/ha)
     */
    let nc = (ctc * v2 * prnt) / (cact * 10);

    // PH ideal para a cultura do milho
    let nc_ph = (nc * (6.5 - ph)) / 0.5;

    let nca = (nc_ph * 100) / prnt / 70 / (sd / 100) / (ic / 100);

    return nca;
}

export default function Calagem() {
    const [ctc, setCtc] = useState('')
    const [v2, setV2] = useState('')
    const [prnt, setPrnt] = useState('')
    const [cact, setCact] = useState('')
    const [ph, setPh] = useState('')
    const [ic, setIc] = useState('')
    const [sd, setSd] = useState('')
    const [result, setResult] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();

        const NCA = calculateLimestone(ctc, v2, prnt, cact, ph, ic, sd);

        setResult(NCA.toFixed(2));
    }

    return (
        <div>
      <Head>
        <title>Limestone Requirement Calculator</title>
      </Head>

      <h1>Limestone Requirement Calculator for Corn</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="CTC">Cation exchange capacity (cmolc/dm³):</label>
          <input type="number" id="CTC" value={ctc} onChange={(event) => setCtc(event.target.value)} />
        </div>
        <div>
          <label htmlFor="V2">Base saturation percentage (V%) at the desired pH:</label>
          <input type="number" id="V2" value={v2} onChange={(event) => setV2(event.target.value)} />
        </div>
        <div>
          <label htmlFor="PRNT">Relative neutralizing power of the limestone (as a percentage):</label>
          <input type="number" id="PRNT" value={prnt} onChange={(event) => setPrnt(event.target.value)} />
        </div>
        <div>
          <label htmlFor="CACT">Calcium carbonate equivalent of the limestone (as a percentage):</label>
          <input type="number" id="CACT" value={cact} onChange={(event) => setCact(event.target.value)} />
        </div>
        <div>
          <label htmlFor="pH">Soil pH:</label>
          <input type="number" id="pH" step="0.1" value={ph} onChange={(event) => setPh(event.target.value)} />
        </div>
        <div>
            <label htmlFor="IC">Limestone incorporation percentage:</label>
            <input type="number" id="IC" value={ic} onChange={(event) => setIc(event.target.value)} />
        </div>
        <div>
            <label htmlFor="SD">Soil density (g/cm³):</label>
            <input type="number" id="SD" value={sd} onChange={(event) => setSd(event.target.value)} />
        </div>
        <button type="submit">Calculate</button>
        </form>
        {result !== null && <p>The limestone requirement is: {result} t/ha</p>}
    </div>
    )
    
}
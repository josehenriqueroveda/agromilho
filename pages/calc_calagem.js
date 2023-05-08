import { useState } from 'react';
import styles from '@/styles/Home.module.css'
import Head from 'next/head';
import ResultBox from '@/components/resultbox';
import Modal from 'react-modal';


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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const NCA = calculateLimestone(ctc, v2, prnt, cact, ph, ic, sd);

    setResult(NCA.toFixed(2));
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Head>
        <title>Calculadora de Calagem</title>
        <meta name="description" content="Cálculo de necessidade de calcário" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.header}>
          <div className={styles.appName}>
            <a
              href="/"
              rel="noopener noreferrer"
            >
              <h1>
                <span className={styles.agro}>agro</span><span className={styles.milho}>milho</span>
              </h1>
            </a>
          </div>
        </div>
        <div className={`${styles.container}`}>
          <h1 className={`${styles.title}`}>Calculadora de Calagem</h1>
          <form className={`${styles.form}`}>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="CTC" className={`${styles.label}`}>Capacidade de troca de cátions (cmolc/dm³):</label>
              <input type="number" id="CTC" value={ctc} onChange={(event) => setCtc(event.target.value)} className={`${styles.input}`} />
            </div>
            <div>
              <label htmlFor="V2" className={`${styles.label}`}>Saturação por bases desejada (V%) no pH desejado:</label>
              <input type="number" id="V2" value={v2} onChange={(event) => setV2(event.target.value)} className={`${styles.input}`} />
            </div>
            <div>
              <label htmlFor="PRNT" className={`${styles.label}`}>Poder relativo de neutralização total do calcário (em porcentagem):</label>
              <input type="number" id="PRNT" value={prnt} onChange={(event) => setPrnt(event.target.value)} className={`${styles.input}`} />
            </div>
            <div>
              <label htmlFor="CACT" className={`${styles.label}`}>Capacidade de neutralização do calcário (em porcentagem):</label>
              <input type="number" id="CACT" value={cact} onChange={(event) => setCact(event.target.value)} className={`${styles.input}`} />
            </div>
            <div>
              <label htmlFor="pH" className={`${styles.label}`}>pH do solo:</label>
              <input type="number" id="pH" step="0.1" value={ph} onChange={(event) => setPh(event.target.value)} className={`${styles.input}`} />
            </div>
            <div>
              <label htmlFor="IC" className={`${styles.label}`}>Incorporação de calcário (em porcentagem):</label>
              <input type="number" id="IC" value={ic} onChange={(event) => setIc(event.target.value)} className={`${styles.input}`} />
            </div>
            <div>
              <label htmlFor="SD" className={`${styles.label}`}>Densidade do solo (g/cm³):</label>
              <input type="number" id="SD" value={sd} onChange={(event) => setSd(event.target.value)} className={`${styles.input}`} />
            </div>
          </form>
          <button type="submit" onClick={handleSubmit} className={`${styles.button}`}>Calcular</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Resultado"
            className={`${styles.modal}`}
            overlayClassName={`${styles.modal_overlay}`}
          >
            {result !== null && <ResultBox result={result} title={"A necessidade de calcário é:"} funClose={handleCloseModal} unit={"kg por hectare"}/>}
          </Modal>
        </div>
      </main>
    </>
  )
}
import styles from '@/styles/Home.module.css'
import Head from 'next/head';
import { useState } from 'react';
import ResultBox from '@/components/resultbox';
import Modal from 'react-modal';

export default function Emater() {
    const [ears, setEars] = useState('')
    const [avg_weight, setWeight] = useState('')
    const [spacing, setSpacing] = useState('')
    const [result, setResult] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function calculate_emater(ears, avg_weight, spacing) {
        return ((ears * avg_weight) / (spacing / 100)) / 1000
    }

    function handleSubmit(e) {
        e.preventDefault();

        const RESULT = calculate_emater(ears, avg_weight, spacing);

        setResult(RESULT.toFixed(2));
        setModalIsOpen(true);
    }

    function handleCloseModal() {
        setModalIsOpen(false);
    }


    return (
        <>
            <Head>
                <title>Cálculo EMATER</title>
                <meta name="description" content="Cálculo de produtividade do EMATER" />
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
                    <h1 className={`${styles.title}`}>Cálculo de Produtividade (EMATER)</h1>
                    <form className={`${styles.form}`}>
                        <div className={`${styles.formGroup}`}>
                            <label htmlFor="EARS" className={`${styles.label}`}>Número de espigas em 10m de linha:</label>
                            <input type="number" id="EARS" value={ears} onChange={(event) => setEars(event.target.value)} className={`${styles.input}`} />
                        </div>
                        <div>
                            <label htmlFor="AVG_WEIGHT" className={`${styles.label}`}>Peso médio dos grãos (em gramas) de 3 espigas coletadas:</label>
                            <input type="number" id="AVG_WEIGHT" value={avg_weight} onChange={(event) => setWeight(event.target.value)} className={`${styles.input}`} />
                        </div>
                        <div>
                            <label htmlFor="SPACING" className={`${styles.label}`}>Espaçamento entre linhas (em centímetros):</label>
                            <input type="number" id="SPACING" value={spacing} onChange={(event) => setSpacing(event.target.value)} className={`${styles.input}`} />
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
                        {result !== null && <ResultBox result={result} title={"A produtividade estimada é:"} funClose={handleCloseModal} unit={"ton/ha"} />}
                    </Modal>
                </div>
            </main>
        </>
    )
}
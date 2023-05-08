import { useState } from 'react';
import styles from '@/styles/Home.module.css'
import Head from 'next/head';
import ResultBox from '@/components/resultbox';
import Modal from 'react-modal';

export default function Simple() {
    const [avg_weight, setWeight] = useState('')
    const [population, setPopulation] = useState('')
    const [result, setResult] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function calculate_simple(avg_weight, population) {
        return (((avg_weight / 1000) * population)) / 1000
    }

    function handleSubmit(e) {
        e.preventDefault();

        const RESULT = calculate_simple(avg_weight, population);

        setResult(RESULT.toFixed(2));
        setModalIsOpen(true);
    }

    function handleCloseModal() {
        setModalIsOpen(false);
    }

    return (
        <>
            <Head>
                <title>Cálculo Simples</title>
                <meta name="description" content="Cálculo de produtividade simples" />
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
                    <h1 className={`${styles.title}`}>Método Simples de Cáculo</h1>
                    <form className={`${styles.form}`}>
                        <div>
                            <label htmlFor="AVG_WEIGHT" className={`${styles.label}`}>Peso médio dos grãos das espigas selecionadas (em gramas):</label>
                            <input type="number" id="AVG_WEIGHT" value={avg_weight} onChange={(event) => setWeight(event.target.value)} className={`${styles.input}`} />
                        </div>
                        <div>
                            <label htmlFor="POPULATION" className={`${styles.label}`}>População (plantas/ha):</label>
                            <input type="number" id="POPULATION" value={population} onChange={(event) => setPopulation(event.target.value)} className={`${styles.input}`} />
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
                        {result !== null && <ResultBox result={result} title={"A produtividade estimada é:"} funClose={handleCloseModal} unit={"ton/ha"}/>}
                    </Modal>
                </div>
            </main>
        </>
    )
}
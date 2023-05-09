import React from "react";
import styles from '@/styles/Home.module.css'

function ResultBox({ result, title, funClose, unit }) {
  if (result == null || result == undefined || result == "NaN" || result == NaN) {
    return (
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <label className={styles.label_warning}>Preencha todos os campos para calcular!</label>
          <button onClick={funClose} className={styles.close_button}>
            Fechar
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <label className={styles.label}>{title}</label>
          <div className={styles.modal_result}>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <h1 className={styles.title}>{result}</h1>
              <div className={styles.modal_unit}>
                <p>{unit}</p>
              </div>
            </div>
            <button onClick={funClose} className={styles.close_button}>
              Fechar
            </button>
          </div>

        </div>
      </div>
    );
  }
}


export default ResultBox;
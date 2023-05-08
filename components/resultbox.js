import React from "react";
import styles from '@/styles/Home.module.css'

function ResultBox({ result, title, funClose, unit}) {
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
          </div>
          <button onClick={funClose} className={styles.close_button}>
            Fechar
          </button>
        </div>
      </div>
    );
  }
  

export default ResultBox;
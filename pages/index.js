import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AgroMilho</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.header}>
          <div className={styles.appName}>
            <h1>
              <span className={styles.agro}>agro</span><span className={styles.milho}>milho</span>
            </h1>
          </div>
          <div className={styles.author}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5>By{' '}</h5>
              <h4>José Henrique Roveda</h4>
            </a>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.subtitle}>
            Métodos de cálculo de produtividade:
          </div>
          <div className={styles.cardsWrapper} >
            <div className={styles.grid}>
              <a
                href="/calc_simple"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  Cálculo Simples <span>-&gt;</span>
                </h2>
                <p>
                  Cálculo da produtividade a partir do peso médio dos grãos das espigas selecionadas e da população de plantas por hectare.
                </p>
              </a>

              <a
                href="/calc_emater"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  Cálculo Emater <span>-&gt;</span>
                </h2>
                <p>
                  Método de cálculo do EMATER a partir do número de espigas em 10m lineares, peso médio dos grãos e o espaçamento.
                </p>
              </a>

              <a
                href="/calc_calagem"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  Cálculo Calagem <span>-&gt;</span>
                </h2>
                <p>
                  Cálculo da necessidade de calcário para correção da acidez do solo.
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

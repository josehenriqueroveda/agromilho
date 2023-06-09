import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AgroMilho</title>
        <meta name="description" content="Calculadora Online para Produtores de Milho" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
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
        <div className={styles.content}>
          <div className={styles.title}>
            Calculadora Online para Produtores de Milho:
          </div>
          <div className={styles.cardsWrapper} >
            <div className={styles.grid}>
              <a
                href="/calc_simple"
                className={styles.card}
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
                rel="noopener noreferrer"
              >
                <h2>
                  Cálculo Calagem <span>-&gt;</span>
                </h2>
                <p>
                  Cálculo da necessidade de calcário para correção da acidez do solo na cultura do milho.
                </p>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

import Head from "next/head";
import Link from "next/link";
import Styles from "../styles/sucess.module.scss";

{/* Página que indica que evento foi deletado */}
export default function eventDeletedPage() {
  return (
    <>
      <Head>
        <title>Evento excluído</title>
      </Head>

      <main>
        <section className={Styles.container}>
          <div className={Styles.minionsImage}>
            <img src="./images/Multidão de minions.png" alt="Multidão de minions" />

          </div>

          <div className={Styles.congratulations}>
            <p> PARABÉNS, SEU EVENTO FOI EXCLUÍDO COM SUCESSO </p>
          </div>

          <div className={Styles.sadMinionImage}>
            <img src="./images/sadMinion.png" alt="Minion triste" />

          </div>

          <div className={Styles.backToHomePage}>
            <Link href="./">
              <button onClick={() => { }} type="button">VOLTAR PARA HOME PAGE</button>
            </Link>
          </div>
        </section>

      </main>

    </>
  );
};

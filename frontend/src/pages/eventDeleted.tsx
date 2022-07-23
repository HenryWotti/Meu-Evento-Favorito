import Head from "next/head";

import Styles from "../styles/sucess.module.scss";

export default function eventDeletedPage() {
  return (
    <>
      <Head>
        <title>Evento excluído</title>
      </Head>
      
      <main>
        <section className={Styles.initialImage}>
            <div className={Styles.minionsImage}>
                <img src="./images/Multidão de minions.png" alt="Multidão de minions" />

            </div>

            <div className={Styles.congratulations}>
              <p> PARABÉNS SEU EVENTO <span>*nome do evento</span> FOI EXCLUÍDO COM SUCESSO </p>
            </div>

            <div >
              <button type="button" className={Styles.backToHomePage}>VOLTAR PARA HOME PAGE</button>
            </div>
        </section>
        
      </main>

    </>
  );
};

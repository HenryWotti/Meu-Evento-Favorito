import Head from "next/head";

import Styles from "../styles/sucess.module.scss";

export default function eventDeletedPage() {
    return (
        <>
            <Head>
                <title>Inscrição excluída</title>
            </Head>

            <main>
                <section className={Styles.container}>
                    <div className={Styles.minionsImage}>
                        <img src="./images/Multidão de minions.png" alt="Multidão de minions" />

                    </div>

                    <div className={Styles.congratulations}>
                        <p> PARABÉNS, SUA INSCRIÇÃO FOI EXCLUÍDA COM SUCESSO </p>
                    </div>

                    <div className={Styles.sadMinionImage}>
                        <img src="./images/sadMinion.png" alt="Minion triste" />

                    </div>

                    <div className={Styles.backToHomePage}>
                        <button type="button">VOLTAR PARA HOME PAGE</button>
                    </div>
                </section>

            </main>

        </>
    );
};
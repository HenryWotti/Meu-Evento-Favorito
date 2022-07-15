import Head from "next/head";

import Styles from "../styles/home.module.scss";



export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Início | MEU EVENTO FAVORITO</title>
      </Head>
      <main>
        <section className={Styles.initialSection}>
          <img src="./images/minionHome.png" alt="minion" />
          <div className={Styles.sectionTitle}>
            <h1>MEU EVENTO <br /> <span>FAVORITO</span></h1>
          </div>
        </section>
      </main>

    </>
  );
};

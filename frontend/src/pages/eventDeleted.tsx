import Head from "next/head";

import Styles from "../styles/event.module.scss";

export default function CreateEventPage() {
  return (
    <>
      <Head>
        <title>Evento excluído</title>
      </Head>
      
      <main>
        <section className={Styles.initialImage}>
            <div >
                <img src="./images/Multidão de minions.png" alt="Multidão de minions" />

            </div>
        </section>
        
      </main>

    </>
  );
};

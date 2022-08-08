import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from 'firebase/firestore'

import Styles from "../styles/home.module.scss";

export default function IndexPage() {

  const [events, setEvents] = useState([]);

  const eventsCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(eventsCollectionRef)
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getEvents();
  }, []);

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
        <section className={Styles.eventSection}>
          <div className={Styles.createEventButton}>
            <Link href='/createEvent'>
              <button>Criar Evento</button>
            </Link>
          </div>


          {events.map((event) => {
            return (
              <>
                <div className={Styles.eventDisplay}>
                  <p>{event.nomeEvento}</p>
                  <p>Data Início: {event.dataInicio}</p>
                  <p>Horário: {event.horaInicio}</p>
                  <p>Local: {event.local}</p>
                </div>
              </>
            );
          })}

        </section>


      </main>

    </>
  );
};

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import EditEventPage from "./"

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

  /*const updateEvent = async (
    id,
    nomeEvento,
    descricaoEvento,
    qtdMaxPessoas,
    publicoAlvo,
    idadeMin,
    dataInicio,
    dataFim,
    horaInicio,
    horaFim,
    local) => {

  };*/

  const deleteEvent = async (id) => {
    const userDoc = doc(db, "events", id);
    await deleteDoc(userDoc)
    location.reload();
  };

  const handleEventFinished = async (color) => {
    const btn = document.getElementById('btn');
    btn.style.background = color
  };

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
                  <p className={Styles.eventTitle}>{event.nomeEvento}</p>

                  <p><span>Descrição: </span> {event.descricaoEvento}</p>

                  <p><span>Data de Início: </span> {event.dataInicio}</p>
                  <p><span>Horário: </span>{event.horaInicio}</p>
                  <p><span>Local: </span>{event.local}</p>
                  <p><span>Público alvo: </span>{event.publicoAlvo}</p>
                  <p><span>Idade Mínima: </span>{event.idadeMin}</p>
                  <br />

                  <button onClick={() => { deleteEvent(event.id) }} className={Styles.eventButtons}>Excluir evento</button>
                  <button onClick={() => { deleteEvent(event.id) }} className={Styles.eventButtons}>Cadastrar </button>

                </div>
              </>
            );
          })}

        </section>


      </main>

    </>
  );
};

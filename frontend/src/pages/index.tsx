import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
//import EditEventPage from "./"
import eventDeleted from "./"
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

  /*
  const handleEventFinished = async (color) => {
    const btn = document.getElementById('btn');
    btn.style.background = color
  };*/



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

          {/* Mostra os eventos criados na homepage */}
          {events.map((event) => {
            return (
              <>
                <div className={Styles.eventDisplay}>
                  <p className={Styles.eventTitle}>{event.nomeEvento}</p>

                  <p><span>Descrição: </span> {event.descricaoEvento}</p>
                  <div className={Styles.duasInfoLinha}>
                    <p><span>Data de Início: </span> {event.dataInicio}</p>
                    <p><span>Data de Término: </span> {event.dataFim}</p>
                  </div>
                  <div className={Styles.duasInfoLinha}>
                    <p><span>Horário de início: </span>{event.horaInicio}</p>
                    <p><span>Horário de fim: </span>{event.horaFim}</p>
                  </div>
                  <p><span>Local: </span>{event.local}</p>
                  <p><span>Público alvo: </span>{event.publicoAlvo}</p>
                  <p><span>Idade Mínima: </span>{event.idadeMin}</p>
                  <br />

                  <div className={Styles.detailsOwner}>
                    <p><span>Responsável pelo evento: </span>{event.nomeCriador}</p>
                    <p><span>E-mail associado: </span>{event.emailCriador}</p>
                  </div>
                  <br />
                  <Link href="./eventDeleted">
                    <button onClick={() => { deleteEvent(event.id) }} className={Styles.eventButtons}>Excluir evento</button>
                  </Link>
                  <label className={Styles.checkAsDone}>
                    <input type="checkbox" ></input>
                    <p>Evento concluído</p>
                  </label>

                  {/*<button onClick={() => { deleteEvent(event.id) }} className={Styles.eventButtons}> Cadastrar </button>*/}

                </div>
              </>
            );
          })}

        </section>


      </main>

    </>
  );
};

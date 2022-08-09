import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import Styles from "../styles/event.module.scss";
import { collection, getDocs } from 'firebase/firestore'

export default function EditEventPage() {
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
                <title>Editar Evento</title>
            </Head>

            <main>
                <section className={Styles.initialSection}>

                    <section className={Styles.sectionTitle}>
                        <a>
                            <Link href='/'>
                                <img src="./images/goBack.svg" alt="voltar" />
                            </Link>
                        </a>
                        <h1 >EDIÇÃO DE EVENTO</h1>
                    </section>

                    <section className={Styles.sectionForm}>

                        <form>

                            <div className={Styles.dotAndTitle}>
                                <img src="./images/pontoAmarelo.svg" alt="ponto amarelo" />
                                <h2>Informações do evento</h2>
                            </div>

                            <div className={Styles.labelAndInput}>
                                <label>
                                    Nome do evento<br />
                                    <input className={Styles.inputMedium} type="text" />
                                    <br />
                                </label>
                                <label>
                                    Descrição do evento<br />
                                    <textarea className={Styles.inputLarge}></textarea>
                                    <br />
                                </label>
                                <label>
                                    Quantidade máxima de pessoas<br />
                                    <input className={Styles.inputSmall} type="number" />
                                    <br />
                                </label>
                                <label>
                                    Público Alvo<br />
                                    <input
                                        className={Styles.inputMedium}
                                        type="text"
                                    />
                                    <br />
                                </label>

                                <label>
                                    Idade mínima requerida<br />
                                    <input
                                        className={Styles.inputSmall}
                                        type="number"
                                    />
                                    <br />
                                </label>
                                <label>
                                    Início do evento<br />
                                    <input
                                        className={Styles.inputSmall}
                                        type="date"
                                    />
                                    <br />
                                </label>
                                <label>
                                    Fim do evento <br />
                                    <input
                                        className={Styles.inputSmall}
                                        type="date"
                                    />
                                    <br />
                                </label>
                                <label>
                                    Horário de início<br />
                                    <input
                                        className={Styles.inputSmall}
                                        type="time"
                                    />
                                    <br />
                                </label>
                                <label>
                                    Horário de fim<br />
                                    <input
                                        className={Styles.inputSmall}
                                        type="time"
                                    />
                                    <br />
                                </label>
                                <label className={Styles.labelAndInput}>
                                    Local do evento<br />
                                    <input
                                        className={Styles.inputMedium}
                                        type="text"
                                    />
                                    <br />
                                </label>
                            </div>

                            <div className={Styles.sendSection}>
                                <div className={Styles.sendButton}>
                                    <Link href="/">
                                        <button>Salvar</button>
                                    </Link>
                                </div>
                                <div>
                                    <img src="./images/trioMinions.png" alt="três minions" />
                                </div>

                            </div>

                        </form>
                    </section>
                </section>
            </main>
        </>
    );
};

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore'
import Styles from "../styles/event.module.scss";
import { db } from "../firebase-config";

export default function CreateEventPage() {
    const [nomeCriador, setNomeCriador] = useState("");
    const [emailCriador, setEmailCriador] = useState("");
    const [nomeEvento, setNomeEvento] = useState("");
    const [descricaoEvento, setDescricaoEvento] = useState("");
    const [qtdMaxPessoas, setQtdMaxPessoas] = useState("");
    const [publicoAlvo, setPublicoAlvo] = useState("");
    const [idadeMin, setIdadeMin] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");
    const [horaInicio, setHoraInicio] = useState("");
    const [horaFim, setHoraFim] = useState("");
    const [local, setLocal] = useState("");

    const eventsCollectionRef = collection(db, "events");

    {/* Função que pega dados dos inputs do formulário e envia para o banco de dados */}
    const createEvent = async () => {
        await addDoc(eventsCollectionRef, {
            nomeCriador: nomeCriador,
            emailCriador: emailCriador,
            nomeEvento: nomeEvento,
            descricaoEvento: descricaoEvento,
            qtdMaxPessoas: qtdMaxPessoas,
            publicoAlvo: publicoAlvo,
            idadeMin: idadeMin,
            dataInicio: dataInicio,
            dataFim: dataFim,
            horaInicio: horaInicio,
            horaFim: horaFim,
            local: local,
            convidadoEspecial: ""
        })
    };

    return (
        <>
            <Head>
                <title>Criar Evento</title>
            </Head>

            <main>
                <section className={Styles.initialSection}>

                    <section className={Styles.sectionTitle}>
                        <a>
                            <Link href='/'>
                                <img src="./images/goBack.svg" alt="voltar" />
                            </Link>

                        </a>
                        <h1 >CRIAÇÃO DE EVENTO</h1>
                    </section>

                    <section className={Styles.sectionForm}>
                        <div className={Styles.dotAndTitle}>
                            <img src="./images/pontoAmarelo.svg" alt="ponto amarelo" />
                            <h2>Informações do criador do evento</h2>
                        </div>
                        <form action="/editEvent" method="POST">

                            <div className={Styles.labelAndInput}>
                                <label>
                                    Nome<br />
                                    <input
                                        className={Styles.inputMedium}
                                        type="text"
                                        onChange={(event) => { setNomeCriador(event.target.value) }}
                                    />
                                    <br />
                                </label>
                                <label>
                                    E-mail<br />
                                    <input
                                        className={Styles.inputMedium}
                                        type="email"
                                        onChange={(event) => { setEmailCriador(event.target.value) }}
                                    />
                                </label>
                            </div>


                            <div className={Styles.dotAndTitle}>
                                <img src="./images/pontoAmarelo.svg" alt="ponto amarelo" />
                                <h2>Informações do evento</h2>
                            </div>

                            <div className={Styles.labelAndInput}>
                                <label>
                                    Nome do evento<br />
                                    <input
                                        className={Styles.inputMedium}
                                        type="text"
                                        onChange={(event) => { setNomeEvento(event.target.value) }}
                                    />
                                    <br />
                                </label>

                                <label>
                                    Descrição do evento<br />
                                    <textarea
                                        className={Styles.inputLarge}
                                        onChange={(event) => { setDescricaoEvento(event.target.value) }}
                                    ></textarea>
                                    <br />
                                </label>
                                <label>
                                    Quantidade máxima de pessoas<br />
                                    <input
                                        className={Styles.inputSmall}
                                        type="number"
                                        onChange={(event) => { setQtdMaxPessoas(event.target.value) }}
                                    />
                                    <br />
                                </label>
                                <label>
                                    Público Alvo<br />
                                    <input
                                        className={Styles.inputMedium}
                                        type="text"
                                        onChange={(event) => { setPublicoAlvo(event.target.value) }}
                                    />
                                    <br />
                                </label>

                                <label>
                                    Idade mínima requerida<br />
                                    <input
                                        className={Styles.inputSmall}
                                        type="number"
                                        onChange={(event) => { setIdadeMin(event.target.value) }}
                                    />
                                    <br />
                                </label>
                                <label>
                                    Início do evento<br />
                                    <input
                                        className={Styles.inputSmall}
                                        type="date"
                                        onChange={(event) => { setDataInicio(event.target.value) }}
                                    />
                                    <br />
                                </label>
                                <label>
                                    Fim do evento <br />
                                    <input
                                        className={Styles.inputSmall}
                                        type="date"
                                        onChange={(event) => { setDataFim(event.target.value) }}
                                    />
                                    <br />
                                </label>
                                <label>
                                    Horário de início<br />
                                    <input
                                        className={Styles.inputSmall}
                                        type="time"
                                        onChange={(event) => { setHoraInicio(event.target.value) }}
                                    />
                                    <br />
                                </label>
                                <label>
                                    Horário de fim<br />
                                    <input
                                        className={Styles.inputSmall}
                                        type="time"
                                        onChange={(event) => { setHoraFim(event.target.value) }}
                                    />
                                    <br />
                                </label>
                                <label className={Styles.labelAndInput}>
                                    Local do evento<br />
                                    <input
                                        className={Styles.inputMedium}
                                        type="text"
                                        onChange={(event) => { setLocal(event.target.value) }}
                                    />
                                    <br />
                                </label>
                            </div>

                            <div className={Styles.sendSection}>
                                <div className={Styles.sendButton}>
                                    <Link href="/">
                                        <button onClick={createEvent}>Enviar</button>
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

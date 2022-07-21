import Head from "next/head";

import Styles from "../styles/createEvent.module.scss";

export default function CreateEventPage() {
  return (
    <>
      <Head>
        <title>CRIAR EVENTO</title>
      </Head>
      
      <main>
        <section className={Styles.initialSection}>

            <section  className={Styles.sectionTitle}>
                <a target="_blank" href="" rel="noopener noreferrer">
                            <img src="./images/goBack.svg" alt="voltar" />
                </a>
                <h1 >CRIAÇÃO DE EVENTO</h1>
            </section>

            <section className={Styles.sectionForm}>
                <div className={Styles.dotAndTitle}>
                    <img src="./images/pontoAmarelo.svg" alt="ponto amarelo"/>
                    <h2>Informações do criador do evento</h2>
                </div>
            <form>
                <div className={Styles.infoCreator}>
                    <div className={Styles.labelAndInput}>
                        <label>
                            Nome<br/>
                            <input className={Styles.inputSmall} type="text" placeholder="Nome"/>
                        </label>
                    </div>
                    <div className={Styles.labelAndInput}>
                        <label>
                            E-mail<br/>
                            <input type="email" placeholder="Seu e-mail favorito"/>
                        </label>
                    </div>
                </div>

                <div className={Styles.dotAndTitle}>
                    <img src="./images/pontoAmarelo.svg" alt="ponto amarelo"/>
                    <h2>Informações do evento</h2>
                </div>
                <div className={Styles.labelAndInput}>
                    <label>
                        Nome do evento<br/>
                        <input type="text" placeholder="Nome"/>
                    </label>
                </div>

                <div className={Styles.labelAndInput}>
                    <label>
                        Descrição do evento<br/>
                        <input type="text" placeholder="Capriche e torne seu evento atrativo!"/>
                    </label>
                </div>
                <div className={Styles.labelAndInput}>
                    <label>
                        Quantidade máxima de pessoas<br/>
                        <input type="number"/>
                    </label>

                    <div className={Styles.checkboxes}>
                    <legend>Público-alvo<br/></legend>
                    <div>
                        <label>
                            <input type="checkbox" name="publicoalvo"/>
                            Homens 
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="publicoalvo"/>
                            Mulheres 
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="publicoalvo"/>
                            Crianças 
                        </label>
                    </div>
                        
                    </div>

                </div>
            
                <label>
                        Idade mínima requerida<br/>
                        <input type="number"/>
                </label> <br/>
                
                <label>
                    Início do evento<br/>
                    <input type="datetime-local"/>
                </label> <br/>
                <label>
                    Fim do evento   <br/>
                    <input type="datetime-local"/>
                </label> <br/>
                <label>
                    Local do evento<br/>
                    <input type="text"/>
                </label>

                <br/>


                <input type="submit" value="Enviar" />
            </form>

            </section>
        </section>
        
      </main>

    </>
  );
};

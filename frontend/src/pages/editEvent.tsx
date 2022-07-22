import Head from "next/head";

import Styles from "../styles/event.module.scss";

export default function EditEventPage() {
  return (
    <>
      <Head>
        <title>Editar Evento</title>
      </Head>
      
      <main>
        <section className={Styles.initialSection}>

            <section  className={Styles.sectionTitle}>
                <a target="_blank" href="" rel="noopener noreferrer">
                            <img src="./images/goBack.svg" alt="voltar" />
                </a>
                <h1 >EDIÇÃO DE EVENTO</h1>
        </section>

            <section className={Styles.sectionForm}>

            <form>

                <div className={Styles.dotAndTitle}>
                    <img src="./images/pontoAmarelo.svg" alt="ponto amarelo"/>
                    <h2>Informações do evento</h2>
                </div>

                <div className={Styles.labelAndInput}>
                    <label>
                        Nome do evento<br/>
                        <input className={Styles.inputMedium} type="text" placeholder="Nome"/>
                    </label>
                </div>

                <div className={Styles.labelAndInput}>
                    <label>
                        Descrição do evento<br/>
                        <input className={Styles.inputLarge} type="text" placeholder="Capriche e torne seu evento atrativo!"/>
                    </label>
                </div>

                <div className={Styles.labelAndInput}>
                    <label>
                        Quantidade máxima de pessoas<br/>
                        <input className={Styles.inputSmall} type="number"/>
                    </label>
                </div>
                <div className={Styles.labelAndInput}>
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
                        <br/>
                    </div>

                </div>
            
                <label className={Styles.labelAndInput}>
                        Idade mínima requerida<br/>
                        <input className={Styles.inputSmall} type="number"/>
                        <br/>
                </label> 
                <br/>
                <label className={Styles.labelAndInput}>
                    Início do evento<br/>
                    <input className={Styles.inputSmall} type="datetime-local"/>
                    <br/>
                </label> 
                <br/>
                <label className={Styles.labelAndInput}>
                    Fim do evento <br/>
                    <input className={Styles.inputSmall} type="datetime-local"/>
                    <br/>
                </label> 
                <br/>
                <label className={Styles.labelAndInput}>
                    Local do evento<br/>
                    <input className={Styles.inputMedium} type="text"/>
                    <br/>
                </label>
                <br/>

                <div className={Styles.loadImage}>
                    <img src="./images/uparArquivo.svg" alt="carregar arquivo ícone"/>
                    <label className={Styles.labelAndInput}>
                        Editar foto do evento <br/>
                        <input type="file" />
                    </label>                    
                </div>

                <div className={Styles.sendSection}>
                    <div>

                    </div>
                    <div>
                        <img src="./images/trioMinions.png" alt="três minions"/>
                    </div>
                    <div>
                        <input className={Styles.sendButton} type="submit" value="Salvar" />
                    </div>
                    
                </div>
            </form>

            </section>
        </section>
        
      </main>

    </>
  );
};

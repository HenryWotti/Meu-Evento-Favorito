import Head from "next/head";

import Styles from "../styles/createEvent.module.scss";

export default function CreateEventPage() {
  return (
    <>
      <Head>
        <title className={Styles.sectionTitle}>CRIAR EVENTO</title>
      </Head>
      <main>
        <section>
            <h1>Informações do criador do evento</h1>
          <form>
            <label>
                Nome
                <input type="text" placeholder="Nome"/>
            </label>
            <label>
                E-mail
                <input type="email" placeholder="Seu e-mail favorito"/>
            </label>

            <h1>Informações do evento</h1>
            <label>
                Nome do evento
                <input type="text" placeholder="Nome"/>
            </label>
            <label>
                Descrição do evento
                <input type="text" placeholder="Capriche e torne seu evento atrativo!"/>
            </label>
            <label>
                Quantidade máxima de pessoas
                <input type="number"/>
            </label>
            <legend>Público-alvo</legend>
            <label>
                <input type="checkbox" name="publicoalvo"/>
                Homens 
            </label>
            <label>
                <input type="checkbox" name="publicoalvo"/>
                Mulheres 
            </label>
            <label>
                <input type="checkbox" name="publicoalvo"/>
                Crianças 
            </label>
            
            <input type="submit" value="Enviar" />
          </form>

          <label>
                Idade mínima requerida
                <input type="number"/>
          </label>
            
            <label>
                Início do evento
                <input type="datetime-local"/>
            </label>
            <label>
                Fim do evento   
                <input type="datetime-local"/>
            </label>
            <label>
                Local do evento
                <input type="text"/>
            </label>
        </section>
      </main>

    </>
  );
};

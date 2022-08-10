import styles from './styles.module.scss';

{ /* Footer foi criado como componente por ser usado em todas as páginas */}
export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>

                <div className={styles.footerTitle}>
                    <h1>Meu Evento Favorito</h1>
                </div>


                <div className={styles.footerSocials}>
                    <div>
                        <a target="_blank" href="https://www.instagram.com/ctjuniorufes/" rel="noopener noreferrer">
                            <img src="./images/instagram.svg" alt="logo instagram" />
                        </a>
                        <a target="_blank" href="https://www.facebook.com/ufesctjunior/" rel="noopener noreferrer">
                            <img src="./images/facebook.svg" alt="logo facebook" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/ct-junior/" rel="noopener noreferrer">
                            <img src="./images/whatsapp.svg" alt="logo whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
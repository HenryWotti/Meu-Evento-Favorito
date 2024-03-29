import Document, { Html, Head, Main, NextScript } from 'next/document'

 { /* Armazena configurações gerais utilizados por toda a aplicação */ }
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />

                    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;800;900&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap" rel="stylesheet" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Magra:wght@400;700&family=Poppins:wght@400;600&family=Roboto:wght@700;900&display=swap" rel="stylesheet" />

                </Head>
                <body>
                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}
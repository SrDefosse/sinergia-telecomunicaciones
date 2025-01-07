import { NavBar } from "@/components/navbar/NavBar";
import "@/styles/globals.css";
import { WAButton } from "@/components/buttons/WAButton";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sinergia Telecomunicaciones | Soluciones en Conectividad</title>
        <meta 
          name="description" 
          content="Sinergia Telecomunicaciones - Expertos en soluciones integrales de conectividad, redes y telecomunicaciones" 
        />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Sinergia Telecomunicaciones | Soluciones en Conectividad" />
        <meta property="og:description" content="Sinergia Telecomunicaciones - Expertos en soluciones integrales de conectividad, redes y telecomunicaciones" />
        <meta property="og:image" content="https://sinergia-telecomunicaciones.com.mx/favicon.ico" /> {/* URL del favicon */}
        <meta property="og:url" content="https://sinergia-telecomunicaciones.com.mx/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sinergia Telecomunicaciones | Soluciones en Conectividad" />
        <meta name="twitter:description" content="Sinergia Telecomunicaciones - Expertos en soluciones integrales de conectividad, redes y telecomunicaciones" />
        <meta name="twitter:image" content="https://sinergia-telecomunicaciones.com.mx/favicon.ico" /> {/* URL del favicon */}
      </Head>
      <NavBar />
      <WAButton />
      <Component {...pageProps} />
    </>
  );
}

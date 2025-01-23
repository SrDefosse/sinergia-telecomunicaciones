import { NavBar } from "@/components/navbar/NavBar";
import "@/styles/globals.css";
import Head from "next/head";
import HoverFloatingDropdown from "@/components/buttons/HoverFloatingDropdown";

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
      </Head>
      <NavBar />
      <HoverFloatingDropdown />
      <Component {...pageProps} />
    </>
  );
}

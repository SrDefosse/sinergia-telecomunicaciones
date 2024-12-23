import { NavBar } from "@/components/navbar/NavBar";
import "@/styles/globals.css";
import { WAButton } from "@/components/buttons/WAButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <WAButton />
      <Component {...pageProps} />
    </>
  );
}

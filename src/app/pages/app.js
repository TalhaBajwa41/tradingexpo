import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <>
      <button className="theme-toggle" onClick={() => setDark(!dark)}>
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
      <Component {...pageProps} />
    </>
  );
}

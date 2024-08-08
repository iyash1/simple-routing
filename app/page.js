import Image from "next/image";
import styles from "./page.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;


export default function Home() {
  return (
    <main>
      <h3>This is the Home page!</h3>
    </main>
  );
}

import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Out Loud</h1>
      <span>Speaker rentals for any event</span>
      <Footer />
    </div>
  );
}

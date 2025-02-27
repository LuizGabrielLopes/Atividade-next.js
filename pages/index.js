import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Block from "../components/Block";

export default function Home() {
  return (
    <div className={styles.container}>

      <Header />
      
      <main className={styles.main}>
        <div className={styles.blocos}>
          <Block title={"Card 1"} content={"Meu primeiro card"}/>
          <Block title={"Card 2"} content={"Meu segundo card"}/>
          <Block title={"Card 3"} content={"Meu terceiro card"}/>
        </div>
        <aside className={styles.aside}>
          <div className={styles.lanchao}>
            <img src="/lanche.png" alt="McPicanha" />
            </div>
        </aside>
      </main>

      <Footer />

    </div>
  );
}

import styles from "./App.module.scss";
import backImage from "./assets/back-image.svg";
import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <img src={backImage} alt="" className={styles.backImage} />
      <img src={logo} alt="" className={styles.logo} />
      <h1>Autenticação feita.</h1>
      <h3>Você pode fechar essa página</h3>
    </>
  );
}

export default App;

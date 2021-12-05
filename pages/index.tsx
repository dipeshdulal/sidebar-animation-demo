import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { useState } from "react";

const Home: NextPage = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1> Main Section</h1>
        <button onClick={() => setSidebarOpened((o) => !o)}>OpenSidebar</button>
      </div>
      <div
        className={`${styles.sidebar} ${sidebarOpened ? styles.active : ""}`}
      >
        <div className={styles.sidebarContent}>
          <h3>Sidebar</h3>
          <ul>
            <li>
              <a href="#a">LinkA</a>
              <div className={styles.sidebarLinkContent}>
                <h1>ContentA</h1>
                <ul>
                  <li>SubLinkA</li>
                  <li>SubLinkB</li>
                  <li>SubLinkC</li>
                  <li>SubLinkD</li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#b">LinkB</a>
              <div className={styles.sidebarLinkContent}>
                <h1>ContentB</h1>
              </div>
            </li>
            <li>
              <a href="#c">LinkC</a>
              <div className={styles.sidebarLinkContent}>
                <h1>ContentC</h1>
              </div>
            </li>
            <li>
              <a href="#d">LinkD</a>
              <div className={styles.sidebarLinkContent}>
                <h1>ContentD</h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

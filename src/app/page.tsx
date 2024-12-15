import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/RMWhiteLogoName.svg"
          alt="App Logo"
          width={400}
          height={400}
          priority
        />

        <p className={styles.motto}>Welcome to the future of shopping.</p>

        <a
          href="https://apps.apple.com/app/idYOUR_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.appStoreButton}
            src="/app_store.svg"
            alt="Download on the App Store"
            width={160}
            height={50}
          />
        </a>
      </main>
    </div>
  );
}

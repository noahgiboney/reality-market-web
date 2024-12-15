import Image from "next/image"
import styles from "./listing.module.css";

export default function ListingPage() {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="/RMWhiteLogo.svg"
            alt="App Logo"
            width={300}
            height={300}
            priority
          />
        </main>
      </div>
    );
  }
  
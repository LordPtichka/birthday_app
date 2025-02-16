import Image from "next/image";
import styles from "./page.module.css";
import image_2 from "./images/2.png"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <Image
            className={styles.image_block}
            src={image_2}
            alt="Next.js logo"
            priority
          />
        </ol>
      </main>
    </div>
  );
}

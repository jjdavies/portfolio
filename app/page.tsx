import Image from 'next/image';
import styles from './styles/page.module.css';
import model from './img/model.png';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src={model}
          alt="model page image"
          style={{ width: '100vw', height: 'auto' }}
        />
      </main>
      <div className={styles.banner}>
        This is a static image of a site in development. For reference
        only. Please contact: j.jdavies2002@gmail.com
      </div>
    </div>
  );
}

"use client";
import styles from "../../styles/page.module.css";
import portfolioStyles from "../../styles/portfolio.module.css";
import BF3School from "../../component/scenes/BF3U1School1";
import YouTube from "react-youtube";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.sectionheader}>Sight Word Stories</div>
      <div className={styles.videosection}>
        <div className={styles.section}>
          <YouTube
            videoId="kaU6UtuYzG4"
            opts={{
              height: "390",
              width: "640",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
          <div className={styles.sectiontext}>
            This series of eight videos accompany fiction books for young
            leaders, each of which introduces sight words.
          </div>
        </div>
        <div className={styles.section}>
          <YouTube
            videoId="C7DUL9uhF-4"
            opts={{
              height: "390",
              width: "640",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
          <div className={styles.sectiontext}>
            These eight videos accompany non-fiction sight word stories.
          </div>
        </div>
      </div>
    </div>
  );
}

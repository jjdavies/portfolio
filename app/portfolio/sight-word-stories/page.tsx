"use client";
import React from "react";
import styles from "../../styles/page.module.css";
import YouTube from "react-youtube";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.pagehead}>
        <div className={styles.section}>
          <div className={styles.sectionheader}>Sight Word Stories</div>
          <div className={styles.sectiontext}>
            A series of videos to accompany books that teach sight words. These
            are high-quality videos produced in a studio with a professional
            teacher.
            <br /> Produced and Edited by James Davies.
          </div>
        </div>
      </div>
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
            learners, each of which introduces sight words.
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

"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/page.module.css";
import YouTube from "react-youtube";

export default function Page() {
  const [width, setWidth] = useState<string>("1236");
  const [height, setHeight] = useState<string>("695.25");

  useEffect(() => {
    console.log(window.innerWidth, window.innerWidth * 0.5625);
    setWidth("" + window.innerWidth * 0.9);
    setHeight("" + window.innerWidth * 0.9 * 0.5625);
  }, []);
  const opts = {
    width: width,
    height: height,
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className={styles.page} style={{ margin: 0 }}>
      <div className={styles.pagehead}>
        <div className={styles.section} style={{ margin: 0 }}>
          <div className={styles.sectionheader}>Sight Word Stories</div>
          <div className={styles.sectiontext}>
            A series of videos to accompany books that teach sight words. These
            are high-quality videos produced in a studio with a professional
            teacher.
            <br /> Produced and Edited by James Davies.
          </div>
        </div>
      </div>
      <div className={styles.videosections}>
        <div className={styles.section} style={{ margin: 0 }}>
          {+width > 0 && +height > 0 && (
            <YouTube videoId="kaU6UtuYzG4" opts={opts} />
          )}
          <div className={styles.sectiontext}>
            This series of eight videos accompany fiction books for young
            learners, each of which introduces sight words. {width} {height}
          </div>
        </div>
        <div className={styles.section} style={{ margin: 0 }}>
          {+width > 0 && +height > 0 && (
            <YouTube videoId="C7DUL9uhF-4" opts={opts} />
          )}
          <div className={styles.sectiontext}>
            These eight videos accompany non-fiction sight word stories.
          </div>
        </div>
      </div>
    </div>
  );
}

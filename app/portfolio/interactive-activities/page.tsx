"use client";
import styles from "../../styles/page.module.css";
import portfolioStyles from "../../styles/portfolio.module.css";
import Builder from "../../img/media/builder.gif";
import Player from "../../img/media/farmactivity.gif";
import InteractiveActivities from "../../img/Interactive Activities 3.png";

import Image from "next/image";

export default function Page() {
  return (
    <div className={styles.page}>
      <div
        className={styles.pagehead}
        style={{
          height: "initial",
          minHeight: "40vh",
          boxShadow: "10px 10px 10px #000000",
        }}
      >
        <div className={styles.section}>
          <div className={styles.sectionheader} style={{ padding: "0vw" }}>
            Interactive Activities Software
          </div>
          <div className={styles.sectiontext} style={{ padding: "2vw" }}>
            Tools to develop and present interactive activities for students.
            This software is designed to be used on interactive whiteboards and
            other interactive displays.
          </div>
        </div>
        <Image
          src={InteractiveActivities}
          width={0}
          height={0}
          style={{ maxHeight: "30vh", width: "auto", marginRight: "1vw" }}
          alt="students using the interactive activities on an interactive whiteboard"
        />
      </div>
      <div className={styles.imagesections}>
        <div className={styles.imagesection}>
          <div className={styles.sectionheader} style={{ margin: "1vh" }}>
            Activity Builder
          </div>
          <Image
            src={Builder}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto", padding: "0vw 0vw" }}
            alt={"Activity Builder"}
            unoptimized
          />
          <div className={styles.sectiontext}>
            Choose the activity format, size and position assets on the screen.
            The settings are changed and prepared for use in the classroom.
          </div>
        </div>
        <div className={styles.imagesection}>
          <div className={styles.sectionheader}>Interactive Player</div>
          <Image
            src={Player}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto", padding: "0vw 0vw" }}
            alt={"Activity PLayer"}
          />
          <div className={styles.sectiontext}>
            The interactive player presents interactive multimedia for
            competition, collaborating, as well as in response to teacher
            prompts and audio clips.
          </div>
        </div>
      </div>
    </div>
  );
}

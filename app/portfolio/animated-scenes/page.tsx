"use client";
import React from "react";
import styles from "../../styles/page.module.css";
import BF3School from "../../component/scenes/BF3U1School1";
import Link from "next/link";
import localFont from "next/font/local";
import GithubLogo from "../../img/GitHub_Invertocat_Light.png";
import Image from "next/image";

const monaSansSemi = localFont({ src: "../../MonaSans-SemiBold.ttf" });

export default function Page() {
  return (
    <div className={styles.page}>
      <BF3School />
      <div className={styles.sectionheader}>Interactive School Scene</div>
      <Link href="http://www.github.com/jjdavies/octp-res-app">
        <div className={monaSansSemi.className + " " + styles.github}>
          <Image
            src={GithubLogo}
            style={{
              margin: "5px",
              width: "30px",
              height: "auto",
              objectFit: "contain",
            }}
            alt="github logo"
          />
        </div>
      </Link>
      <div className={styles.sectiontext}>
        Click the different areas of the school to zoom in. <br />
        This uses the speed and animation of Spine2D, webGL, and incorporates
        some interactive elements so users can zoom in to engage further.
      </div>
    </div>
  );
}

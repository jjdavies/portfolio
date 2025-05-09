import React from "react";
import Image from "next/image";
import styles from "../../styles/page.module.css";
import localFont from "next/font/local";
import GithubLogo from "../../img/GitHub_Invertocat_Light.png";
import Link from "next/link";
import EcoDrillSite1 from "../../img/ecodrill-site1.png";
import EcoDrillSite2 from "../../img/ecodrill-site2.png";

const monaSansSemi = localFont({ src: "../../MonaSans-SemiBold.ttf" });

export default function Page() {
  return (
    <div className={styles.page} style={{ margin: 0 }}>
      <div className={styles.pagehead}>
        <div className={styles.section} style={{ margin: 0 }}>
          <div className={styles.sectionheader}>EcoDrill</div>
          <Link href="http://www.github.com/jjdavies/powertools-ecomm">
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
            An e-commerce website to sell power tools. This site was built using
            Next.js and TypeScript. It is a fully functional e-commerce site
            which takes advantage of Server-Side Rendering to deliver product
            data to the customer with minimal delay. Client components allow
            interaction with the site, including adding items to the cart and
            checking out. NextJS API routes allow database queries without a
            backend server. The site is fully responsive and works on all
            devices.
            <br /> Developed by James Davies.
          </div>
        </div>
      </div>
      <div className={styles.section} style={{ margin: 0 }}>
        <Image
          src={EcoDrillSite1}
          style={{ width: "100%", height: "auto" }}
          alt="A screenshot of the EcoDrill homepage"
        />
        <div className={styles.sectiontext}>
          The home page of EcoDrill. This page is fully responsive and works on
          all devices. The site is built using Next.js and TypeScript.
        </div>
        <Image
          src={EcoDrillSite2}
          style={{ width: "100%", height: "auto" }}
          alt="A screenshot of the EcoDrill shopping basket page"
        />
        <div className={styles.sectiontext}>
          The cart or shopping basket page. Checkout is handled using Stripe.
        </div>
      </div>
    </div>
  );
}

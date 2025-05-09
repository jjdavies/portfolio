import React from "react";
import Image from "next/image";
import styles from "./styles/page.module.css";
import localFont from "next/font/local";
import ProfilePhoto from "./img/_DSC0033.png";
import Adobe from "./img/skills/adobe.svg";
import HTMLcss from "./img/skills/htmlcss.png";
import JSlogo from "./img/skills/jslogo.svg";
import ReactLogo from "./img/skills/react.svg";
import NextJS from "./img/skills/next-js.svg";
import PostgreSQL from "./img/skills/postgre.png";
import Spine from "./img/skills/spine.png";
import NestJS from "./img/skills/nestjs.png";
import AE from "./img/skills/ae.png";

import InteractiveActivitiesThumb from "./img/Interactive Activities 3.png";
import AnimatedScenesThumb from "./img/animated scene school.png";
import VideoMkt from "./img/videomkt.png";
import SightWordStoriesThumb from "./img/swstories.png";
import Ecommerce from "./img/ecommerce.jpg";
import GithubLogo from "./img/GitHub_Invertocat_Light.png";

import Link from "next/link";

const erasDemi = localFont({ src: "./eras-itc-demi.ttf" });
const myriadPro = localFont({ src: "./MYRIADPRO-REGULAR.otf" });
const monaSansSemi = localFont({ src: "./MonaSans-SemiBold.ttf" });

const skillsTechs = [
  {
    name: "HTML & CSS",
    img: HTMLcss,
  },
  {
    name: "JavaScript",
    img: JSlogo,
  },
  {
    name: "React & Next.js",
    img: ReactLogo,
    img2: NextJS,
  },
  {
    name: "PostgreSQL",
    img: PostgreSQL,
  },
  {
    name: "Spine2D",
    img: Spine,
  },
  {
    name: "NestJS",
    img: NestJS,
  },
  {
    name: "Graphic Design & Editing",
    img: Adobe,
  },
  {
    name: "Animation",
    img: AE,
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.profilehead} style={{ height: "30vh" }}>
        <div className={styles.profiletext}>
          <div className={erasDemi.className + " " + styles.profilename}>
            James Davies
          </div>
          <div className={erasDemi.className + " " + styles.profiledesc}>
            Full Stack Developer & Media Specialist
          </div>
          <Link href="http://www.github.com/jjdavies/">
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
              /jjdavies
            </div>
          </Link>
        </div>
        <div className={styles.profilephotocontainer}>
          <Image
            className={styles.profilephoto}
            src={ProfilePhoto}
            width={0}
            height={0}
            alt={"James Profile Photo"}
          />
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.profilehead} style={{ height: "2px" }}></div>
        <div className={styles.section}>
          <div className={erasDemi.className + " " + styles.sectionheader}>
            About
          </div>
          <div className={myriadPro.className + " " + styles.sectiontext}>
            I have developed expertise in the development of products from
            education to media that covers multimedia design, APP and web
            development, media production, as well as training and leading a
            large team.
            <br /> My particular expertise is in launching ambitious projects
            that comprise multiple media formats in an efficient process that
            results in a meticulous, fully-realised product for the end user.
            See my work!
          </div>
        </div>
        <div
          className={erasDemi.className + " " + styles.sectionheader}
          style={{ textAlign: "center" }}
        >
          Skills & Technologies
        </div>
        <div className={styles.techbadges}>
          {skillsTechs.map((skill) => (
            <div key={skill.name} className={styles.techbadge}>
              <div className={styles.skillbadgecontainer}>
                <Image
                  src={skill.img}
                  width={0}
                  height={0}
                  style={{
                    display: "block",
                    position: "relative",
                    width: skill.img2 ? "50%" : "60%",
                    height: "auto",
                  }}
                  alt="skill image"
                />
                {skill.img2 && (
                  <Image
                    src={skill.img2}
                    width={0}
                    height={0}
                    style={{
                      display: "block",
                      position: "relative",
                      width: "55%",
                      height: "auto",
                      paddingLeft: "1vw",
                    }}
                    alt="skill image"
                  />
                )}
              </div>

              <div className={styles.skillname}>{skill.name}</div>
            </div>
          ))}
        </div>
        <div className={styles.section}>
          <div
            className={erasDemi.className + " " + styles.sectionheader}
            style={{ textAlign: "center" }}
          >
            Portfolio
          </div>
          <div className={styles.portfoliocontainer}>
            <div className={erasDemi.className + " " + styles.portfolioitem}>
              <Link href="/portfolio/animated-scenes">
                <Image
                  className={styles.portfolioimg}
                  src={AnimatedScenesThumb}
                  style={{
                    width: "200px",
                    height: "140px",
                    objectFit: "cover",
                  }}
                  alt="animated scenes thumb"
                />
                <div className={styles.portfoliotext}>Animated Scenes</div>
              </Link>
            </div>
            <div className={erasDemi.className + " " + styles.portfolioitem}>
              <Link href="/portfolio/interactive-activities">
                <Image
                  className={styles.portfolioimg}
                  src={InteractiveActivitiesThumb}
                  style={{
                    width: "200px",
                    height: "140px",
                    objectFit: "cover",
                  }}
                  alt="interactive activities"
                />
                <div className={styles.portfoliotext}>
                  Interactive Activities
                </div>
              </Link>
            </div>
            <div className={erasDemi.className + " " + styles.portfolioitem}>
              <Link href="/portfolio/sight-word-stories">
                <Image
                  className={styles.portfolioimg}
                  src={SightWordStoriesThumb}
                  style={{
                    width: "200px",
                    height: "140px",
                    objectFit: "cover",
                  }}
                  alt="sight word stories"
                />
                <div className={styles.portfoliotext}>Sight Word Stories</div>
              </Link>
            </div>
            <div className={erasDemi.className + " " + styles.portfolioitem}>
              <Image
                className={styles.portfolioimg}
                src={VideoMkt}
                style={{
                  width: "200px",
                  height: "140px",
                  objectFit: "cover",
                }}
                alt="video marketing"
              />
              <div className={styles.portfoliotext}>
                Videos for English Books and Classes
              </div>
            </div>
            <div className={erasDemi.className + " " + styles.portfolioitem}>
              <Link href="/portfolio/ecodrill">
                <Image
                  className={styles.portfolioimg}
                  src={Ecommerce}
                  style={{
                    width: "200px",
                    height: "140px",
                    objectFit: "cover",
                  }}
                  alt="e-commerce website"
                />
                <div className={styles.portfoliotext}>
                  Power Tools - E-commerce Website
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.contactcontainer}></div>
      </main>
    </div>
  );
}

"use client";
import styles from "../../styles/page.module.css";
import portfolioStyles from "../../styles/portfolio.module.css";
import BF3School from "../../component/scenes/BF3U1School1";

export default function Page() {
  return (
    <div className={styles.page}>
      <BF3School />
      <div className={styles.sectionheader}>Interactive School Scene</div>
      <div className={styles.sectiontext}>
        Click the different areas of the school to zoom in. <br />
        This uses the speed and animation of Spine2D, webGL, and incorporates
        some interactive elements so users can zoom in to engage further.
      </div>
    </div>
  );
}

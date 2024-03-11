import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Viswanathan S</h1>
        <p className={styles.description}>
        Hello, I'm Viswanathan, a full-stack web and mobile app developer passionate about creating visually appealing and highly functional digital solutions. With expertise in HTML, CSS, JavaScript, Python, React, React Native, and Node.js, I specialize in guiding projects from start to finish. My RHCSA certification highlights my system administration skills, while my knack for problem-solving and effective communication ensures successful collaborations with clients. Let's bring your projects to life together!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

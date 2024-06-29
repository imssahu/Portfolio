import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";
import Particle from "../Particle";
export const Home = () => {
  const typedElement = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer.", "Tech Enthusiast.", "Learner."],
      typeSpeed: 30,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.particleCanvas}>
        <Particle />
      </div>
      <img
        src="assets\Profile\profile.png"
        alt="image of me"
        className={styles.mImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, Sumit Sahu here.</h1>
        <p className={styles.description}>
          I'm a <span className={styles.typedtext} ref={typedElement}></span>
        </p>
      </div>
      <a
        href="https://drive.google.com/file/d/1FypifijvZBZi7AoiVC3n_n56vbJUap0H/view?usp=sharing"
        className={styles.CVBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

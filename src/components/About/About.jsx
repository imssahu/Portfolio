import React from "react";
import styles from "./About.module.css";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { GrServers } from "react-icons/gr";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="assets\about\Man.png"
          alt="this is the image"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <MdOutlineScreenshotMonitor className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a passionate web developer with a strong foundation in both
                frontend and backend technologies. On the frontend, I specialize
                in crafting engaging user interfaces using React.js, along with
                styling with Tailwind CSS, Bootstrap, HTML, and CSS. I thrive on
                creating dynamic and responsive web applications that deliver
                exceptional user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <GrServers className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                In backend development, I leverage Express and Node.js to build
                robust server-side architectures. My proficiency extends to
                database management with MySQL and MongoDB, ensuring efficient
                data handling and seamless integration with frontend
                functionalities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

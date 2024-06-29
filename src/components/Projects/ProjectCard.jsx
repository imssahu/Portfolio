import React from "react";
import { FaPlay, FaCode } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <Fade bottom>
      <div className={styles.container}>
        <div className={styles.projectContent}>
          <h3 className={styles.title}>{title}</h3>
          <img
            src={imageSrc}
            alt={`Image of ${title}`}
            className={styles.image}
          />
          <div className={styles.showcaseBtn}>
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={styles.iconBtn}
              aria-labelledby={`${title.replace(" ", "-").toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${title.replace(" ", "-").toLowerCase()}-demo`}
                className={styles.icon}
                aria-label="Demo"
              />
            </a>
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className={styles.iconBtn}
              aria-labelledby={`${title
                .replace(" ", "-")
                .toLowerCase()}-source`}
            >
              <FaCode
                id={`${title.replace(" ", "-").toLowerCase()}-source`}
                className={styles.icon}
                aria-label="Source"
              />
            </a>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <span key={id} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Fade>
  );
};

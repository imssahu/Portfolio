import React from "react";
import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import "./globalStyles.css";
export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        allowTouchMove={false}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        {projects.map((project, id) => (
          <SwiperSlide key={id} className={styles.swiperSlide}>
            <div className={styles.projects}>
              <ProjectCard project={project} />
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.sliderControler}>
          <div className={`swiper-button-prev ${styles.swiperButtonPrev}`} />
          <div className={`swiper-button-next ${styles.swiperButtonNext}`} />
        </div>
        <div className={`swiper-pagination ${styles.swiperPagination}`}></div>
      </Swiper>
    </section>
  );
};

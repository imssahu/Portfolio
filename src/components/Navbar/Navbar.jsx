import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import "./glob.css";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => {
            setMenuOpen(!menuOpen);
            handleMenuToggle();
          }}
        />

        {menuOpen && <div className="overlay overlayOpen" />}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className={styles.menuitems}>
            <a href="/">
              <AiOutlineHome className={styles.menuItemIcon} />
              Home
            </a>
          </li>
          <li className={styles.menuitems}>
            <a href="#about">
              <AiOutlineUser className={styles.menuItemIcon} /> About
            </a>
          </li>
          <li className={styles.menuitems}>
            <a href="#skillc">
              <GrTechnology className={styles.menuItemIcon} /> Skills
            </a>
          </li>
          <li className={styles.menuitems}>
            <a href="#projects">
              <AiOutlineFundProjectionScreen className={styles.menuItemIcon} />
              Projects
            </a>
          </li>
          <li className={styles.menuitems}>
            <a href="#contact">
              <AiOutlineContacts className={styles.menuItemIcon} />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

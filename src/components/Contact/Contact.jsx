import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <div className={styles.contactsForm}>
          <form>
            <div className={styles.inputContainer}>
              <label htmlFor="Name" className={styles.label}>
                Name
              </label>
              <input
                placeholder=" Sumit Sahu"
                type="text"
                name="Name"
                className={styles.name}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="Email" className={styles.label}>
                Email
              </label>
              <input
                placeholder="sumitsahu4002@gmail.com"
                type="email"
                name="Email"
                className={styles.email}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="Message" className={styles.label}>
                Message
              </label>
              <textarea
                placeholder="Type your message...."
                type="text"
                name="Message"
                className={styles.message}
              />
            </div>
            <div className={styles.submitbtncontainer}>
              <button type="submit" className={styles.submitBtn} href="/">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <ul className={styles.links}>
        <p>Connect with me on socials</p>
        <li className={styles.link}>
          <img src="assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:sumitsahu4002@gmail.com" target="_blank">
            sumitsahu4002@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/githubIcon.png" alt="GitHub icon" />
          <a href="https://github.com/imssahu" target="_blank">
            GitHub
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/linkedinIcon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/sumit27sahu/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/instagram.png" alt="Instagram icon" />
          <a
            href="https://www.instagram.com/_imssahu?igsh=dnk4anVsaHhub3M="
            target="_blank"
          >
            _imssahu
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/x.png" alt="X icon" />
          <a href="https://x.com/im27sumit" target="_blank">
            @im27sumit
          </a>
        </li>
        <div className={styles.iconTop}>
          <a href="#top">
            <img src="assets/footer/up-arrow.png" alt="Up arrow icon" />
          </a>
        </div>
      </ul>
    </footer>
  );
};

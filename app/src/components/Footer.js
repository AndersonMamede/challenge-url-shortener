import React from 'react';

import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <span className={styles.website}>chr.dc</span>
    </div>
    <div>
      <img
        className={styles.social_icon}
        src={process.env.PUBLIC_URL + '/assets/icon-twitter.png'}
        title="Twitter"
        alt="Twitter"
        width="26"
        height="26"
      />
      <img
        className={styles.social_icon}
        src={process.env.PUBLIC_URL + '/assets/icon-facebook.png'}
        title="Facebook"
        alt="Facebook"
        width="26"
        height="26"
        />
    </div>
  </footer>
);

export default Footer;

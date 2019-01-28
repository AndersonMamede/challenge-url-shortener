import React from 'react';

import styles from './HeaderBar.module.css';

const HeaderBar = () => (
  <header className={styles.bar}>
    <img
      className={styles.logo}
      src={process.env.PUBLIC_URL + '/assets/logo-chaordic.png'}
      alt="Logo"
      width="100"
      height="25"
    />
  </header>
);

export default HeaderBar;

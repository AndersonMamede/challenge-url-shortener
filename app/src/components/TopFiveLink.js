import React from 'react';

import styles from './TopFiveLink.module.css';

const TopFiveLink = ({ shortUrl }) => (
  <a className={styles.link} href={shortUrl} target="_blank" rel="noopener noreferrer">
    {shortUrl}
  </a>
);

export default TopFiveLink;

import React from 'react';

import styles from './FormUrlShortener.module.css';

const backgroundImage = `url('${process.env.PUBLIC_URL}/assets/background-home.jpg')`;

const FormUrlShortener = () => (
  <form className={styles.form} style={{ backgroundImage }}>
    <div className={styles.form_content}>
      <h1 className={styles.title}>Shorten your links</h1>
      <p className={styles.description}>
        Links are long. Shorten the links you want to share and keep
        track of them while people navigate on the internet.
      </p>
      <div className={styles.input_container}>
        <div className={styles.input_wrapper}>
          <input className={styles.input} type="text" placeholder="Paste your link here"/>
        </div>
        <input className={styles.submit} type="submit" value="Shorten" title="Click to shorten your link"/>
      </div>
    </div>
  </form>
);

export default FormUrlShortener;

import React from 'react';

import styles from './TotalHitsCounter.module.css';

const TotalHitsCounter = ({ totalHits }) => (
  <section className="section gray_bg text_center">
    <div className="section_container">
      <h1 className="section_title">Hits</h1>
      <div>
        <span className={styles.counter}>{Number(totalHits).toLocaleString('pt-br')}</span>
      </div>
      <div className={styles.observation}>Cliques em links</div>
    </div>
  </section>
);

export default TotalHitsCounter;

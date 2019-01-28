import React from 'react';

import styles from './TopFive.module.css';

const TopFive = () => (
  <section className={styles.section}>
    <h1 className={styles.title}>Top 5</h1>
    <table className={styles.data_table}>
      <tbody>
        <tr>
          <td>
            <a className={styles.item_url} href="http://chr.dc/xyzxyz" target="_blank" rel="noopener noreferrer">http://chr.dc/xyzxyz</a>
          </td>
          <td className={styles.item_count}>7.919</td>
        </tr>
        <tr>
          <td>
            <a className={styles.item_url} href="http://chr.dc/xyzxyz" target="_blank" rel="noopener noreferrer">http://chr.dc/xyzxyz</a>
          </td>
          <td className={styles.item_count}>6.899</td>
        </tr>
        <tr>
          <td>
            <a className={styles.item_url} href="http://chr.dc/xyzxyz" target="_blank" rel="noopener noreferrer">http://chr.dc/xyzxyz</a>
          </td>
          <td className={styles.item_count}>2.111</td>
        </tr>
        <tr>
          <td>
            <a className={styles.item_url} href="http://chr.dc/xyzxyz" target="_blank" rel="noopener noreferrer">http://chr.dc/xyzxyz</a>
          </td>
          <td className={styles.item_count}>617</td>
        </tr>
        <tr>
          <td>
            <a className={styles.item_url} href="http://chr.dc/xyzxyz" target="_blank" rel="noopener noreferrer">http://chr.dc/xyzxyz</a>
          </td>
          <td className={styles.item_count}>43</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default TopFive;

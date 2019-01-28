import React from 'react';
import PropTypes from 'prop-types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import styles from './TopFive.module.css';
import { shortenedItemDataType } from '../types';
import TopFiveLink from './TopFiveLink';

const TopFive = ({ itens }) => {
  let tableContent;

  if (itens && itens.length) {
    tableContent = itens.map(item => (
      <tr key={item.id}>
        <td><TopFiveLink shortUrl={item.shortUrl} /></td>
        <td className={styles.item_count}>{Number(item.hits).toLocaleString('pt-br')}</td>
      </tr>
    ));
  } else {
    tableContent = [...Array(5)].map((x, key) => (
      <tr key={key}>
        <td colSpan="2"><Skeleton/></td>
      </tr>
    ));
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>TOP 5</h1>
      <SkeletonTheme color="#DDD" highlightColor="#FEFEFE">
        <table className={styles.data_table}>
          <tbody>
            {tableContent}
          </tbody>
        </table>
      </SkeletonTheme>
    </section>
  );
};

TopFive.propTypes = {
  itens: PropTypes.arrayOf(shortenedItemDataType)
};

export default TopFive;

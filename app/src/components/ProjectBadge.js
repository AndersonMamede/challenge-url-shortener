import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectBadge.module.css';

const ProjectBadge = ({ url, text }) => (
  <a className={styles.badge} href={url} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

ProjectBadge.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ProjectBadge.defaultProps = {
  text: 'About this project',
}

export default ProjectBadge;

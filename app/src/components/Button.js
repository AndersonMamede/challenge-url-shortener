import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    const { text, type, onClick, className } = this.props;
    const buttonClassName = `${styles.button} ${className}`;

    return (
      <button className={buttonClassName} type={type} onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
};

export default Button;

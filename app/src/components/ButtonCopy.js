import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

import Button from './Button';

class ButtonCopy extends Button {
  render() {
    return (
      <CopyToClipboard text={this.props.value}>
        {super.render()}
      </CopyToClipboard>
    )
  }
}

ButtonCopy.propTypes = Object.assign({}, Button.propTypes, {
  value: PropTypes.string.isRequired,
});

ButtonCopy.defaultProps = Object.assign({}, Button.defaultProps, {
  text: 'Copy url',
  type: 'button',
});

export default ButtonCopy;

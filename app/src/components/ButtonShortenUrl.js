import Button from './Button';

class ButtonShortenUrl extends Button {}

ButtonShortenUrl.defaultProps = Object.assign({}, Button.defaultProps, {
  text: 'Shorten',
  type: 'submit',
});

export default ButtonShortenUrl;

import React from 'react';

import styles from './FormUrlShortener.module.css';
import ButtonShortenUrl from './ButtonShortenUrl';
import ButtonCopy from './ButtonCopy';

const backgroundImage = `url('${process.env.PUBLIC_URL}/assets/background-home.jpg')`;

class FormUrlShortener extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inputUrl: '',
      shortenedUrl: '',
    };
    
    this.shortenInputUrl = this.shortenInputUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  shortenInputUrl() {
    if (this.state.inputUrl) {
      const shortenedUrl = 'http://chr.dc/xyzxyz';
      this.setState({ shortenedUrl });
    }
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ inputUrl: event.target.value.trim() });
  }

  render() {
    return (
      <form className={styles.form} style={{ backgroundImage }} onSubmit={this.handleSubmit}>
        <div className={styles.form_content}>
          <h1 className={styles.title}>Shorten your links</h1>
          <p className={styles.description}>
            Links are long. Shorten the links you want to share and keep
            track of them while people navigate on the internet.
          </p>
          <div className={styles.input_container}>
            <input
              className={styles.input}
              type="text"
              placeholder="Paste your link here"
              value={this.state.shortenedUrl || this.state.inputUrl}
              readOnly={this.state.shortenedUrl ? true : null}
              onChange={this.handleChange}
            />
            {this.state.shortenedUrl
              ? (<ButtonCopy className={styles.button_copy} value={this.state.shortenedUrl} />)
              : (<ButtonShortenUrl className={styles.button_shorten_url} onClick={this.shortenInputUrl} />)
            }
          </div>
        </div>
      </form>
    );
  };
};

export default FormUrlShortener;

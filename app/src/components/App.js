import React, { Component } from 'react';
import Favicon from 'react-favicon';

import favicon from '../favicon.ico';
import HeaderBar from './HeaderBar';
import HomePage from './HomePage';

import getTopFive from './../services/getTopFive';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topFive: null,
    };

    this.loadTopFive = this.loadTopFive.bind(this);
  }

  componentDidMount() {
    this.loadTopFive();
  }

  loadTopFive() {
    getTopFive()
      .then(topFive => this.setState({ topFive }))
      .catch(console.error);
  }

  render() {
    return (
      <React.Fragment>
        <Favicon url={favicon} />
        <HeaderBar />
        <HomePage topFive={this.state.topFive} />
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;

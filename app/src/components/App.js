import React, { Component } from 'react';
import Favicon from 'react-favicon';

import favicon from '../favicon.ico';
import ProjectBadge from './ProjectBadge';
import HeaderBar from './HeaderBar';
import HomePage from './HomePage';
import Footer from './Footer';

import getTopFive from './../services/getTopFive';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topFive: null,
      totalHits: 35713571,
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
        <ProjectBadge url="https://github.com/AndersonMamede/challenge-url-shortener" />
        <HeaderBar />
        <main>
          <HomePage topFive={this.state.topFive} totalHits={this.state.totalHits} />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

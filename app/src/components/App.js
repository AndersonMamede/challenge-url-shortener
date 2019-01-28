import React, { Component } from 'react';
import Favicon from 'react-favicon';

import favicon from './../favicon.ico';
import HeaderBar from './HeaderBar';
import FormUrlShortener from './FormUrlShortener';
import TopFive from './TopFive';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Favicon url={favicon} />
        <HeaderBar />
        <main>
          <FormUrlShortener />
          <TopFive />
          {/* <TopHits /> */}
        </main>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;

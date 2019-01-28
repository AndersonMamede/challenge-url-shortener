import React from 'react';
import PropTypes from 'prop-types';

import { shortenedItemDataType } from '../types';
import FormUrlShortener from './FormUrlShortener';
import TopFive from './TopFive';

const HomePage = ({ topFive }) => (
  <main>
    <FormUrlShortener />
    <TopFive itens={topFive} />
    {/* <TopHits /> */}
  </main>
);  

HomePage.propTypes = {
  topFive: PropTypes.arrayOf(shortenedItemDataType)
};

export default HomePage;

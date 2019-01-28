import React from 'react';
import PropTypes from 'prop-types';

import { shortenedItemDataType } from '../types';
import FormUrlShortener from './FormUrlShortener';
import TopFive from './TopFive';
import TotalHitsCounter from './TotalHitsCounter';

const HomePage = ({ topFive, totalHits }) => (
  <React.Fragment>
    <FormUrlShortener />
    <TopFive itens={topFive} />
    <TotalHitsCounter totalHits={totalHits}/>
  </React.Fragment>
);  

HomePage.propTypes = {
  topFive: PropTypes.arrayOf(shortenedItemDataType),
  totalHits: PropTypes.number.isRequired,
};

export default HomePage;

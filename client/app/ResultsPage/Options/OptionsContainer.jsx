import React, { Component, PropTypes } from 'react';
import { FancyBorder } from '../../helpers';
import InterestsContainer from './InterestsContainer.jsx';
import InputsContainer from './InputsContainer.jsx';

class OptionsContainer extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-centered text-center">
          <FancyBorder color="yellow"><h1>Activities</h1></FancyBorder>
        </div>
        <div className="row">
          <InterestsContainer />
        </div>
        <div className="row">
          <InputsContainer className="inputs" />
        </div>
      </div>
    );
  }
}

OptionsContainer.propTypes = {

};

export default OptionsContainer;
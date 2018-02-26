import React from 'react';
import ScreenRow from './ScreenRow';
import PropTypes from 'prop-types';

function Screen(props){
  return (
    <div className="screen">
      <ScreenRow value={props.question} />
      <ScreenRow value={props.answer} />
    </div>
  );
}

Screen.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default Screen;

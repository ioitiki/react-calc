import React from 'react';
import PropTypes from 'prop-types';

function ScreenRow(props){
  return (
    <div className="screen-row">
      <input type="text" value={props.value} />
    </div>
  );
}

ScreenRow.propTypes = {
  value: PropTypes.string.isRequired
};

export default ScreenRow;

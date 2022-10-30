// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { FilterWrapper } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterWrapper>
    <label>
      {/* Find contacts by name */}
      <input type="text" value={value} onChange={onChange} />
    </label>
  </FilterWrapper>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

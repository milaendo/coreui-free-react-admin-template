import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

function DefaultFooter(props){

    // eslint-disable-next-line
    const { children, ...attributes } = props;

    return (
      <React.Fragment>
        <span><a href="https://coreui.io">Easy Go Traveler</a> &copy; 2019</span>
      </React.Fragment>
    );
  }

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;

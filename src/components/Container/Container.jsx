import React from 'react';
import PropTypes from 'prop-types';
// import './Container.css';
import 'components/Container/Container.css';


export const Container = ({ children }) =>
    <div className="Container">
        {children}
    </div>;


Container.propTypes = {
    children: PropTypes.node.isRequired,
};



// export default Container;

import React from 'react';
import PropTypes from 'prop-types';

//export 연습
const MyComponent = ({name, favoriteNumber, children}) => {
    //same as
    //const MyComponent = props => {}
    // const {name, children} = props;
    return (
        <div> My name is {name} <br/>
            children is {children} 
            <br/>
            My favorite Number is {favoriteNumber}
        </div>
    );
};

MyComponent.defaultProps = {
    name : 'default name'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
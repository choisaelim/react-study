import React from 'react';

//export 연습
const MyComponent = props => {
    //props 추가
    const {name, children} = props;
    return (
        <div> My name is {name} <br/>
            children is {children} 
        </div>
    );
}

MyComponent.defaultProps = {
    name : 'default name'
}

export default MyComponent;
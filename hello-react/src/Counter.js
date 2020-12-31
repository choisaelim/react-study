import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }
    state = {
        number : 0,
        fixedNumber : 0
    };
    render() {
        const {number, fixedNumber} = this.state; //state 조회
        return (
            <div>
                <h1>{number}</h1>
                <h1>fixed number : {fixedNumber}</h1>
                <button onClick = {() => {
                    // this.setState({number: number + 1});
                    this.setState( (prevState, props) => {
                        return {number: prevState.number + 1};
                    },
                    //callback
                    () => {
                        console.log(this.state);
                    }
                    );
                }}>+1</button>
                
            </div>
        );
    }
}

export default Counter;
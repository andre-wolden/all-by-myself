const value = 2 + 2;

console.warn("Two plus two equals = ");
console.warn(value);


import React from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }

    render(){

        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({liked: true})},
            'Like'
        );
    }
}


const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);

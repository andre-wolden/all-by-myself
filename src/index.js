const value = 2 + 2;

console.warn("Two plus two equals = ");
console.warn(value);


import ReactDOM from 'react-dom';
import LikeButton from 'main.jsx';


const domContainer = document.querySelector('#root');
ReactDOM.render(LikeButton, domContainer);


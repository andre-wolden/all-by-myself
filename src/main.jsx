import React from "react";

import { TransformingButton } from './components/TransformingButton.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h3>All-by-myself React App</h3>
                <TransformingButton />
            </div>
        )

    }
}


export default App;

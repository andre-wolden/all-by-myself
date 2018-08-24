import React from 'react';
import Animation from "./animations/Animation.jsx";
import FargetBolkMedRundKant from "./components/FargetBolkMedRundKant/index.jsx";

class App extends React.Component {

	render(){
		return (
			<div>
				<FargetBolkMedRundKant tittel="GL HF">
					<span>My life, for Aiur.</span>
					<button>
						Aiur
					</button>
					<Animation/>
				</FargetBolkMedRundKant>
			</div>
		)
	}
}

export default App;
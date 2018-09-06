import React from 'react';
import Animation from "./animations/Animation.jsx";
import FargetBolkMedRundKant from "./components/FargetBolkMedRundKant/index.jsx";

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			show: false
		};
		this.handleAiurClick = this.handleAiurClick.bind(this);
	}

	handleAiurClick(){
		console.warn("handleAiurClick");
		this.setState({
			show: true
		});
	}

	render(){
		console.warn(this.state);

		return (
			<div>
				<FargetBolkMedRundKant tittel="GL HF">
					<button id="button_vis_aiur_melding" onClick={this.handleAiurClick}>
						Show Text
					</button>
					{ this.state.show && (<span id="label_vis_aiur_melding">My Life for Aiur.</span>)}
					<Animation/>
				</FargetBolkMedRundKant>
			</div>
		)
	}
}

export default App;
import React from 'react';


class FargetBolkMedRundKant extends React.Component {

	render(){
		return(
			<div className="farget_bolk">
				<h3>{this.props.header}</h3>
				<span>
					{this.props.children}
				</span>
			</div>
		)
	}
}


export default FargetBolkMedRundKant;
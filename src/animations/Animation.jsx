import * as React from 'react';
import Lottie from 'react-lottie';
import sentsuccess from './sentsuccess.json';

export default class Animation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {isStopped: false, isPaused: false};
	}

	render() {

		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: sentsuccess,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			}
		};

		return <div>
			<Lottie
				options={defaultOptions}
				height={400}
				width={400}
				isStopped={this.state.isStopped}
				isPaused={this.state.isPaused}
			/>
		</div>
	}
}

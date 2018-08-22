import * as React from 'react'
import Lottie from 'react-lottie';
import blunkedamejson from './blunkedame.json'

export default class Animation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {isStopped: false, isPaused: false};
	}

	render() {

		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: blunkedamejson,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			}
		};

		return <div>
			asdf
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
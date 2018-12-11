import React				from 'react';


export default class NavBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	render(){
		const {
			setViewingState,
		} = this.props;
		return(
			<div>
				<div
					onClick={() => {
						setViewingState('NEW_POST');
						}}>
							New Post
				</div>
				<div
					onClick={() => {
						this.setViewingState('ALL_POSTS');
						}}>
							All Posts
				</div>
			</div>
		);
	}
}

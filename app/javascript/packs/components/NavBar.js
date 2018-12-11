import React				from 'react';

const NavBarClass = {
	display: 'flex',
	width: '100%',
	border: '2px solid pink',
	justifyContent: "space-between",
	alignItems: "flex-end"
}


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
			<div style={NavBarClass}>
				<div
					onClick={() => {
						setViewingState('NEW_POST');
						}}>
							New Post
				</div>
				<div
					onClick={() => {
						setViewingState('ALL_POSTS');
						}}>
							All Posts
				</div>
			</div>
		);
	}
}

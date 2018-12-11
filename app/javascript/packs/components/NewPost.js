import React				from 'react';


export default class NewPost extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "",
			body: ""
			};
		// Bind this so we can use get this.props
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.setTitle = this.setTitle.bind(this);
		this.setBody = this.setBody.bind(this);
	}
	setTitle(e){
		this.setState({title: e.target.value});
	}
	setBody(e){
		this.setState({body: e.target.value});
	}
	handleFormSubmit(title, body){
		const {
			setViewingState,
			addNewPost
			} = this.props;
		setViewingState('LOADING');
		const post = JSON.stringify({post: {title: this.state.title, body: this.state.body} });
		fetch('http://localhost:3000/api/v1/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: post,
		}).then((response) => {return response.json()})
		.then((post)=> {
			addNewPost(post);
			//this should switch to specific post view
			setViewingState('ALL_POSTS');
		})
	}
	render(){
		return(
			<div>
				<form>
					<input 
						ref="post_title"
						value={this.state.title}
						onChange={this.setTitle}
						placeholder="Enter Title" />
					<input 
						ref="post_body"
						value={this.state.body}
						onChange={this.setBody}
						placeholder="Enter Body" />
					<button
						onClick={this.handleFormSubmit}>
								Submit
					</button>
				</form>
			</div>
		);
	}
}

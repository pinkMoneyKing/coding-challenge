import React				from 'react';


export default class NewComment extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			post_id: "",
			body: ""
			};
		// Bind this so we can use get this.props
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.setBody = this.setBody.bind(this);
	}
	setBody(e){
		this.setState({body: e.target.value});
	}
	handleFormSubmit(){
		const {
			post_id,
			setViewingState,
			// addNewPost
			} = this.props;
		// setViewingState('LOADING');
		const comment = JSON.stringify({comment: {post_id: post_id, body: this.state.body} });
		fetch('http://localhost:3000/api/v1/comments', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			post_id: post_id,
			body: comment,
		}).then((response) => {return response.json()})
		.then((comment)=> {
			// addNewPost(post);
			//this should switch to specific post view
			// setViewingState('ALL_POSTS');
		})
	}
	render(){
		return(
			<div>
				<form>
					<input 
						ref="comment_body"
						value={this.state.body}
						onChange={this.setBody}
						placeholder="Enter Comment" />
					<button
						onClick={this.handleFormSubmit}>
								Submit
					</button>
				</form>
			</div>
		);
	}
}

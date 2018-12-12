import React				from 'react';


export default class Comment extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			editing: false,
			comment: ""
			};
		// Bind this so we can use get this.props
		this.setEditing = this.setEditing.bind(this);
		this.setComment = this.setComment.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	deleteComment(id){
		fetch(`http://localhost:3000/api/v1/comments/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
		}).then((response) => {return response})
	}
	setComment(e){
		this.setState({comment: e.target.value});
	}
	setEditing(bool){
		this.setState({editing: bool})
	}
	handleFormSubmit(){
		const {
			post_id,
			comment
			} = this.props;
		const comment_update = JSON.stringify({comment: {post_id: post_id, body: this.state.comment} });
		const id = comment.id;
		fetch(`http://localhost:3000/api/v1/comments/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: comment_update,
			}).then((response) => {
				this.setEditing(false);
				return response.json()
			})
	}
	compentDidMount(){
	}
	render(){
		const {comment} = this.props;
		if(!this.state.editing){
			return(
				<div>
					<div
						onClick={() => {
							this.deleteComment(comment.id);
					}}>
						(delete c)
					</div>
					<div
						onClick={() => {this.setEditing(true)}}>
						(edit)
					</div>
					<div>
					{comment.body}
					</div>
				</div>
		);
		} else {
			return(
			<div>
				<form>
					<input 
						ref="comment_body"
						value={this.state.comment}
						onChange={this.setComment}
						placeholder="enter comment"/>
					<button
						onClick={this.handleFormSubmit}>
								Submit
					</button>
				</form>
			</div>
		);
	}
	}
}

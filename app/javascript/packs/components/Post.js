import React				from 'react';
import NewComment   from './NewComment';

export default class Post extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			};
		this.displayComments = this.displayComments.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
		}
	deleteComment(id){
		fetch(`http://localhost:3000/api/v1/comments/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
		}).then((response) => {return response})
	}
	displayComments(){
		const {post} = this.props;
		if(post.comments){
			return post.comments.map(c => {
				return (
					<div
						onClick={() => {
							this.deleteComment(c.id);
							}}>
								x
						<div>
							{c.body}
						</div>
					</div>
					)
				})
		} else {
			return;
			}
	}
	render(){
		const {
			setViewingState,
			setPost,
			post,
			deletePost,
			} = this.props;
		return(
			<div>
				<div
					onClick={() => {
						deletePost(post.id);
						}}>
							delete
				</div>

				<div>
					Title: {post.title}
				</div>
				<div>
					Body: {post.body}
				</div>
				<div>
					<div>
						Comments:
					</div>
					{this.displayComments()}
				</div>
				<NewComment 
					post={post}
					setPost={setPost}
					setViewingState={setViewingState}
					post_id={post.id} />
			</div>
			)
		}
}

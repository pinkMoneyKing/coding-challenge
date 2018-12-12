import React				from 'react';
import NewComment   from './NewComment';
import Comment			from './Comment';

export default class Post extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			};
		this.displayComments = this.displayComments.bind(this);
	}
	displayComments(){
		const {post} = this.props;
		if(post.comments){
			return post.comments.map(c => {
				return (
						<Comment
							post_id={post.id}
							comment={c} />
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

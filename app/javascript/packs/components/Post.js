import React				from 'react';
import NewComment   from './NewComment';

export default class Post extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
		}
	render(){
		const {
			setViewingState,
			post,
			} = this.props;
		return(
			<div>
				<div>
					Title: {post.title}
				</div>
				<div>
					Boyd: {post.body}
				</div>
				<div>
					<div>
						Comments:
					</div>
					{post.comments.map(c => {
						return (
							<div>{c.body}</div>
						)
					})}
				</div>
				<NewComment 
					setViewingState={setViewingState}
					post_id={post.id} />
			</div>
			)
		}
}

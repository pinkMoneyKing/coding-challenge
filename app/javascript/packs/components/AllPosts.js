import React				from 'react';

const postStyle = {
	border: '1px grey solid',
	margin: '1em',
	paddingLeft: '1em',
	paddingRight: '1em',
}

const bodyStyles = {
	textOverflow: 'ellipsis',
	overflow: 'hidden',
	width: '100px',
	height: '20px',
	border: '2px blue solid',
}


export const AllPosts = ({
	setPost,
	setViewingState,
	posts}) => {
	return (
		posts.map((post, index) => {
			const comments = post.comments.length ? post.comments.length : 0;
			return(
				<div 
					style={postStyle}
					onClick={() => {
						setPost(post);
						setViewingState('POST')}}
					key={index}>
					<h1>
						{post.title}
					</h1>
					<div style={bodyStyles}>
						{post.body}
					</div>
					<div>
						comments({comments})
					</div>
				</div>
			)
		})
	)
}

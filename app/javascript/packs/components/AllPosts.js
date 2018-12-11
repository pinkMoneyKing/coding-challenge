import React				from 'react';


export const AllPosts = ({posts}) => {
	return (
		posts.map((post, index) => {
			return(
				<div key={index}>
					<div>
						Title: {post.title}
					</div>
					<div>
						Body: {post.body}
					</div>
				</div>
			)
		})
	)
}

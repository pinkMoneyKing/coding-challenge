import React				from 'react';
import {AllPosts}			from './AllPosts';


const viewing_state = {
	LOADING: "LOADING",
	ALL_POSTS: "ALL_POSTS",
};
export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			view: viewing_state.LOADING,
			posts: [],
		}
	}
	renderView(view){
		switch(view){
				case viewing_state.LOADING:
					return <div>Loading</div>;
				case viewing_state.ALL_POSTS:
					return <AllPosts posts={this.state.posts} />
				default:
					return <div>Error</div>;
			}
		}
	componentDidMount(){
		// Fetch all posts
		fetch('/api/v1/posts.json')
			.then((response) => { return response.json()})
		.then((data) => {
			this.setState({posts: data})
			this.setState({view: viewing_state.ALL_POSTS})
			});
	}
	render(){
		console.log("posts", this.state.posts);
		const view = this.state.view
		return(
			<div>
				{this.renderView(view)}
			</div>
		);
	}
}
//<AllPosts posts={this.state.posts} />

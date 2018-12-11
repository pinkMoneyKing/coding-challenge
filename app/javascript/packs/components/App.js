import React				from 'react';
import {AllPosts}		from './AllPosts';
import NavBar				from './NavBar';
import NewPost			from './NewPost';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			view: 'LOADING',
			posts: [],
		}
		// We bind this here so we can using it in other components
		this.setViewingState = this.setViewingState.bind(this);
		this.addNewPost = this.addNewPost.bind(this);
	}
	addNewPost(post){
		this.setState({
			posts: this.state.posts.concat(post)
		})
	}
	setViewingState(view){
		this.setState({view: view});
	}
	renderView(view){
		switch(view){
				case 'LOADING':
					return <div>Loading</div>;
				case 'ALL_POSTS':
					return <AllPosts posts={this.state.posts} />
				case 'NEW_POST':
				return <NewPost 
					setViewingState={this.setViewingState}
					addNewPost={this.addNewPost}
					/>;
				default:
					return <div>Error</div>;
		}
	}
	componentDidMount(){
		// Fetch all posts
		// fetch('/api/v1/posts.json')
		fetch('/posts.json')
			.then((response) => { return response.json()})
		.then((data) => {
			this.setState({posts: data})
			this.setViewingState('ALL_POSTS');
			});
	}
	render(){
		console.log("posts", this.state.posts);
		const view = this.state.view
		return(
			<div>
				<NavBar 
					addNewPost={this.addNewPost}
					setViewingState={this.setViewingState}
					view={view} />
				{this.renderView(view)}
			</div>
		);
	}
}
//<AllPosts posts={this.state.posts} />

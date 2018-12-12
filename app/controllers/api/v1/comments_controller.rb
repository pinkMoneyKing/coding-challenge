class Api::V1::CommentsController < ApplicationController
	def create
		post = Post.find(comment_params[:post_id])
		post.comments.create(comment_params)
	end
	
	def destroy
		Comment.destroy(params[:id])
	end

	def update 
		post = Post.find(comment_params[:post_id])
		comment = post.comments.find(params[:id])
		comment.update(comment_params)
	end

	private
	def comment_params
		params.require(:comment).permit(:body, :post_id, )
	end
end

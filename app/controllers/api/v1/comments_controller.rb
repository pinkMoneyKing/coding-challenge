class Api::V1::CommentsController < ApplicationController
	def create
		@post = Post.find(comment_params[:post_id])
		@comment = @post.comments.create(comment_params)
	end

	private
	def comment_params
		params.require(:comment).permit(:body, :post_id)
	end
end

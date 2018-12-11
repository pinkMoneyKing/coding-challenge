class Api::V1::PostsController < ApplicationController
  def index
		# return all post
		render json: Post.all
  end

  def create
		# Create new post
		post = Post.create(post_params)
		render json: post
  end

  def destroy
    # Remove a `Post` from the database
		Post.destroy(params[:id])
  end

	private

	# only permit these fields
	def post_params
		params.require(:post).permit(:id, :title, :body)
	end

end

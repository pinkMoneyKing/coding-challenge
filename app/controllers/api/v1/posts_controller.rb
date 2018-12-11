class Api::V1::PostsController < ApplicationController
  def index
		# return all post
		# include: 'comments' works with our serializer to the posts comments
		render json: Post.all, include: 'comments'
  end

  def create
		# Create new post
		post = Post.create(post_params)
		render json: post
  end

  def destroy
    # Remove a `Post` from the database
		# can't seem to get this to work
		@id = params[:id]
		@post = Post.find(@id)
		@post.destroy
  end

	private

	# only permit these fields
	def post_params
		params.require(:post).permit(:id, :title, :body)
	end

end

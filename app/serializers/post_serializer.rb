class PostSerializer < ActiveModel::Serializer
	attributes :title, :body, :comments
	def comments
		self.object.comments.map do |c|
			{body: c.body}
		end
	end
end

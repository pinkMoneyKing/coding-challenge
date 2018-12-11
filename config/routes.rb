Rails.application.routes.draw do
	# set up our routes
	namespace :api do
		namespace :v1 do
			resources :posts do
				resources :comments 
			end
		end
	end
end

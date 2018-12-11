Rails.application.routes.draw do
	# set up our routes
	namespace :api do
		namespace :v1 do
			resources :posts do
				resources :comments 
			end
		end
	end

	# Not 100% sure why this is need but it is for comment creation
	namespace :api do
		namespace :v1 do
			resources :comments 
		end
	end
	# Make root route our react app
	root to: "react#index"
end

class ApplicationController < ActionController::Base
	# Changing to null_session
  protect_from_forgery with: :null_session
end

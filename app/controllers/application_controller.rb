class ApplicationController < ActionController::Base
	# Changing to null_sessio
  protect_from_forgery with: :null_session
end

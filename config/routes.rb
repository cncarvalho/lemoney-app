Rails.application.routes.draw do
	namespace :admin do
		resources :offers, only: :index
	end
end

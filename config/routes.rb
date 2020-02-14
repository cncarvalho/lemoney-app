Rails.application.routes.draw do
	namespace :admin do
		resources :offers, only: %i[edit index new]
		resources :sessions, only: %i[new]
	end
end

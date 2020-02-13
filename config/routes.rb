Rails.application.routes.draw do
	namespace :admin do
		resources :offers, only: %i[edit index new]
	end
end

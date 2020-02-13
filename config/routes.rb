Rails.application.routes.draw do
	namespace :admin do
		resources :offers, only: %i[index new]
	end
end

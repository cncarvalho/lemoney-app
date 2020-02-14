Rails.application.routes.draw do
  root 'offers#index'

  resources :offers, only: :index

	namespace :admin do
		resources :offers, only: %i[edit index new]
		resources :sessions, only: %i[new]
	end
end

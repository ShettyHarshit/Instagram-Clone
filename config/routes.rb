Rails.application.routes.draw do
resources :items
  devise_for :users
  resources :posts
  namespace 'api' do
    resources :profiles
    resources :posts do
      put '/like', to: "posts#like"
      put '/unlike', to: "posts#unlike"
    end
    get 'users/me', to: "users#current"
    # resources :users
  end
  post 'authenticate', to: 'authentication#authenticate'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'posts#index'
end

Rails.application.routes.draw do
  resources :items
  devise_for :users
  resources :posts
  namespace 'api' do
    resources :posts do
      put '/like', to: "posts#upvote"
      put '/dislike', to: "posts#downvote"
    end
    get 'users/me', to: "users#current"
    resources :users
  end
  post 'authenticate', to: 'authentication#authenticate'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'posts#index'
end

Rails.application.routes.draw do
  devise_for :users
  resources :posts
  namespace 'api' do
    resources :posts
    resources :users
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'posts#index'
end

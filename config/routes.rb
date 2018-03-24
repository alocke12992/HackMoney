Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

 
  namespace :api do
     get 'my_cart', to: 'cart#my_cart'
    resources :items
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

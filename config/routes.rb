Rails.application.routes.draw do
  root 'site#home'

  resource :customer, only: %w[show], controller: 'site', path: 'customer'
  resources :bookings, only: %w[index], controller: 'site', path: 'bookings'
  scope :customer do
    get '/search', to: 'site#search'
  end
  
  namespace :api do
    namespace :private do
      resources :line_accounts, only: %w[create update]
      resources :customers, only: %w[index]
      resources :bookings, only: %w[index create destroy]
    end
  end
end

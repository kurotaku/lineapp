Rails.application.routes.draw do
  root 'site#home'

  scope :customer do
    resource :connection, only: %w[new], controller: 'site', path: 'connection'
  end

  namespace :api do
    namespace :private do
      resources :line_accounts, only: %w[create]
    end
  end
end

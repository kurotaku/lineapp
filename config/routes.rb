Rails.application.routes.draw do
  root 'site#home'

  namespace :api do
    namespace :private do
      resources :line_accounts, only: %w[create]
    end
  end
end

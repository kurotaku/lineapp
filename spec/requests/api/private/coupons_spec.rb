require 'rails_helper'

RSpec.describe 'Api::Private::Coupons', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/api/private/coupons/index'
      expect(response).to have_http_status(:success)
    end
  end
end

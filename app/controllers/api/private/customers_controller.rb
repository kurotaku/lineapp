module Api
  module Private
    class CustomersController < BaseController
      def index
        customers = customers.where(number: params[:number]) if params[:number].present?
        customers = customers.where(phone: params[:phone]) if params[:phone].present?
        render json: customers
      end
    end
  end
end

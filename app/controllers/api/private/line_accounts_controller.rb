module Api
  module Private
    class LineAccountsController < BaseController
      def create
        line_account = LineAccount.find_or_initialize_by(line_user_id: params[:line_user_id])
        if line_account.update!(name: params[:name])
          render json: line_account
        else
          render json: { data: line_account.errors }, status: :unprocessable_entity
        end
      end
    end
  end
end

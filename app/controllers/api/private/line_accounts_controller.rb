module Api
  module Private
    class LineAccountsController < BaseController
      # ログイン時に自動で作成する以外のユースケースが発生したら修正
      def create
        line_account = LineAccount.find_or_initialize_by(line_user_id: params[:line_user_id])
        if line_account.update(name: params[:name])
          render json: line_account, serializer: LineAccountSerializer
        else
          render json: { data: line_account.errors }, status: :unprocessable_entity
        end
      end

      def update
        line_account = LineAccount.find(params[:id])
        if line_account.update(line_account_params)
          render json: line_account
        else
          render json: { data: line_account.errors }, status: :unprocessable_entity
        end
      end

      private

      def line_account_params
        params.require(:line_account).permit(LineAccount.column_names.map(&:to_sym))
      end
    end
  end
end

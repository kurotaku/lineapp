module Api
  module Private
    class BookingsController < BaseController
      def index
        bookings = Booking.where(line_account_id: params[:line_account_id]).order(start_at: 'ASC')
        render json: bookings, each_serializer: BookingSerializer
      end

      def create
        booking = Booking.new(booking_params)
        if booking.save
          render json: booking
        else
          render json: { data: booking.errors }, status: :unprocessable_entity
        end
      end

      private

      def booking_params
        params.require(:booking).permit(Booking.column_names.map(&:to_sym))
      end
    end
  end
end

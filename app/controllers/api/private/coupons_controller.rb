module Api
  module Private
    class CouponsController < BaseController
      def index
        coupons = Coupon.all
        render json: coupons, each_serializer: CouponSerializer
      end
    end
  end
end

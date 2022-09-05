# == Schema Information
#
# Table name: coupons
#
#  id         :bigint           not null, primary key
#  content    :text(65535)
#  end_date   :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Coupon < ApplicationRecord
end

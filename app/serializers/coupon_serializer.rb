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
class CouponSerializer < BaseSerializer
  attributes %w[id content end_date display_end_date]

  def display_end_date
    object.end_date.strftime('%Y年%m月%d日')
  end
end

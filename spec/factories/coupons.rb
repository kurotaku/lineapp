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
FactoryBot.define do
  factory :coupon do
    end_date { '2022-09-04' }
    content { 'MyText' }
  end
end

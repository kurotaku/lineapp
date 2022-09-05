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
require 'rails_helper'

RSpec.describe Coupon, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

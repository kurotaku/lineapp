# == Schema Information
#
# Table name: line_accounts
#
#  id                                                         :bigint           not null, primary key
#  name                                                       :string(255)
#  created_at                                                 :datetime         not null
#  updated_at                                                 :datetime         not null
#  customer_id                                                :bigint
#  line_user_id(LINEアカウントのIDでリレーションのIDではない) :string(255)
#
# Indexes
#
#  index_line_accounts_on_customer_id  (customer_id)
#
# Foreign Keys
#
#  fk_rails_...  (customer_id => customers.id)
#
class LineAccount < ApplicationRecord
  belongs_to :customer, optional: true
  has_many :bookings, dependent: :destroy
end

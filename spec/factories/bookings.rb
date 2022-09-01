# == Schema Information
#
# Table name: bookings
#
#  id              :bigint           not null, primary key
#  start_at        :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  line_account_id :bigint           not null
#
# Indexes
#
#  index_bookings_on_line_account_id  (line_account_id)
#
# Foreign Keys
#
#  fk_rails_...  (line_account_id => line_accounts.id)
#
FactoryBot.define do
  factory :booking do
    customer { nil }
    start_at { '2022-08-31 00:17:50' }
  end
end

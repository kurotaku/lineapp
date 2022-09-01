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
class BookingSerializer < BaseSerializer
  attributes %w[id start_at display_start_at]

  def display_start_at
    object.start_at.strftime('%Y/%m/%d %H:%M')
  end
end

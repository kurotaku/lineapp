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
require 'rails_helper'

RSpec.describe Booking, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

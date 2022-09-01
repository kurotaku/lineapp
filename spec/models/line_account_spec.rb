# == Schema Information
#
# Table name: line_accounts
#
#  id           :bigint           not null, primary key
#  name         :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  line_user_id :string(255)
#
require 'rails_helper'

RSpec.describe LineAccount, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

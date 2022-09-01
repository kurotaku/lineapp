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
FactoryBot.define do
  factory :line_account do
    line_user_id { 'MyString' }
  end
end

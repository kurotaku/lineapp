# == Schema Information
#
# Table name: customers
#
#  id          :bigint           not null, primary key
#  family_name :string(255)
#  first_name  :string(255)
#  line_status :integer          default(10), not null
#  number      :string(255)
#  phone       :string(255)      default(""), not null
#  point       :integer          default(0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_customers_on_number  (number) UNIQUE
#  index_customers_on_phone   (phone) UNIQUE
#
class Customer < ApplicationRecord
  has_one :line_account, dependent: :nullify
end

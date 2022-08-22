# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

ApplicationRecord.transaction do
  ##########################
  # 顧客
  ##########################
  p '=== Customer ==='

  customers = [
    {number: '0001', family_name: '鈴木', first_name: '一郎', phone: '08011111111'},
    {number: '0002', family_name: '鈴木', first_name: '二郎', phone: '08011111112'},
    {number: '0003', family_name: '鈴木', first_name: '三郎', phone: '08011111113'},
    {number: '0004', family_name: '鈴木', first_name: '四郎', phone: '08011111114'},
    {number: '0005', family_name: '鈴木', first_name: '五郎', phone: '08011111115'},
  ]

  customers.each do |customer|
    object = Customer.find_or_initialize_by(customer)
    object.save!
  end
end
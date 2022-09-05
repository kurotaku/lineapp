# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

require 'securerandom'

ApplicationRecord.transaction do
  ##########################
  # 顧客
  ##########################
  p '=== Customer ==='

  def random_number(n)
    format("%0#{n}d", SecureRandom.random_number(10**n))
  end

  customers = [
    {number: random_number(11), family_name: '鈴木', first_name: '一郎', phone: '08011111111', point: 12_095},
    {number: random_number(11), family_name: '鈴木', first_name: '二郎', phone: '08011111112'},
    {number: random_number(11), family_name: '鈴木', first_name: '三郎', phone: '08011111113'},
    {number: random_number(11), family_name: '鈴木', first_name: '四郎', phone: '08011111114'},
    {number: random_number(11), family_name: '鈴木', first_name: '五郎', phone: '08011111115'},
  ]

  customers.each do |customer| 
    object = Customer.find_or_initialize_by(phone: customer[:phone])
    object.assign_attributes(customer)
    object.save! unless object.persisted?
  end

  ##########################
  # クーポン
  ##########################
  p '=== Coupon ==='

  coupons = [
    {end_date: Time.zone.today + 30.days, content: 'お誕生日のお客様全品10%OFF'},
    {end_date: Time.zone.today + 10.days, content: '3,000円以上お買い上げでポイント2倍'}
  ]

  coupons.each do |coupon| 
    object = Coupon.find_or_initialize_by(content: coupon[:content])
    object.assign_attributes(coupon)
    object.save! unless object.persisted?
  end
end

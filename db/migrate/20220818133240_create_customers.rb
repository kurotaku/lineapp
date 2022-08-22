class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :first_name
      t.string :family_name
      t.string :number
      t.string :phone, null: false, default: ""
      t.integer :line_status, null: false, default: 10

      t.timestamps

      t.index [:phone], unique: true
      t.index [:number], unique: true
    end
  end
end

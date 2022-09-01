class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.references :line_account, null: false, foreign_key: true
      t.datetime :start_at

      t.timestamps
    end
  end
end

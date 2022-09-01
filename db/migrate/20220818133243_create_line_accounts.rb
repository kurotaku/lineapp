class CreateLineAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :line_accounts do |t|
      t.string :line_user_id
      t.string :name
      
      t.timestamps
    end
  end
end

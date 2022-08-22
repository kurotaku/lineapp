class CreateLineAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :line_accounts do |t|
      t.references :customer, null: true, foreign_key: true
      t.string :line_user_id, comment: 'LINEアカウントのIDでリレーションのIDではない'
      t.string :name
      
      t.timestamps
    end
  end
end

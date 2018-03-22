class AddFieldsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string
    add_column :users, :username, :string
    add_column :users, :followers, :integer
    add_column :users, :following, :integer
    add_column :users, :bio, :text
  end
end

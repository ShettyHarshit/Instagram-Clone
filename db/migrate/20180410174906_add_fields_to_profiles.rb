class AddFieldsToProfiles < ActiveRecord::Migration[5.0]
  def change
    add_column :profiles, :bio, :text
    add_column :profiles, :username, :string
    add_column :profiles, :posts, :integer
  end
end

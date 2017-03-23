class AddFieldsToRoom < ActiveRecord::Migration
  def change

  	add_column :rooms, :description, :text
  	add_column :rooms, :house_rules, :text
  	add_column :rooms, :cancellation_policy, :text
  	add_column :rooms, :accommodate, :integer
  	add_column :rooms, :no_of_bedroom, :integer
  	add_column :rooms, :no_of_bathroom, :integer
  	add_column :rooms, :couples_allowed, :boolean, null: false, default: true
  	add_column :rooms, :family_allowed, :boolean, null: false, default: true
  end
end

class AddPriceFieldsToRoom < ActiveRecord::Migration
  def change
  	add_column :rooms, :price, :integer
  	add_column :rooms, :price_charge_type, :string
  end
end

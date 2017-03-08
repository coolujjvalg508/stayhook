class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
    	
        t.string :room_number
    	t.integer :vendor_id
        t.string :room_for
        t.integer :no_of_bed
        t.integer :category_id
        t.integer :sub_category_id
        t.json :amenities

        t.timestamps null: false
    end
  end
end

class CreateBookingDetails < ActiveRecord::Migration
  def change
    create_table :booking_details do |t|
    	t.integer :room_id
    	t.integer :booking_id
    	t.string :room_price
      t.timestamps null: false
    end
  end
end

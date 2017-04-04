class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
		t.integer :user_id
    	t.string :name
    	t.string :phone_no
    	t.string :email
    	t.string :coupon_code
    	t.string :discount_value
    	t.string :discount_type
    	t.string :discount
    	t.string :net_amount
    	t.string :check_in_date
    	t.string :check_out_date
    	t.integer :no_of_rooms
    	t.integer :no_of_guests
    	t.string :status
      t.timestamps null: false
    end
  end
end

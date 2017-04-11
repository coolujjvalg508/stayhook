class AddFieldsTobooking < ActiveRecord::Migration
  def change
  	add_column :bookings, :amount_paid, :integer
  	add_column :bookings, :amount_due, :integer

  end
end

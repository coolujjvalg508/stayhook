class CreateVendorRequests < ActiveRecord::Migration
  def change
    create_table :vendor_requests do |t|
      
    	t.string :email,              null: false, default: ""
		t.string :first_name
		t.string :last_name
		t.string :phone_number
		t.integer :city_id
		t.string :address, :limit => 1000
		t.string :status, default: 'Pending'


      	t.timestamps null: false
    end
  end
end

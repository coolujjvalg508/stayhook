ActiveAdmin.register BookingDetail do
	menu label: 'Manage Booking'

	permit_params :name,:phone_no,:email,:coupon_code,:discount_value, :status, :discount_type,:discount,:net_amount,:check_in_date,:check_out_date,:no_of_rooms,:no_of_guests,:status,:room_id,:room_price
	actions :all, except: [:new, :create, :edit]
	
	index do
	    selectable_column
	    
	    column "Name" do |ee|
	    	ee.try(:booking).try(:name)
		end
	    column "Phone Number" do |ee|
	    	ee.try(:booking).try(:phone_no)
		end
		column "Email" do |ee|
	    	ee.try(:booking).try(:email)
		end
		column :room_id
		column "Status" do |ee|
	    	ee.try(:booking).try(:status)
		end

	    column :created_at
	    actions
	 end


	show do
		attributes_table do

			row "Name" do |ee|
		    	ee.try(:booking).try(:name)
			end
		    row "Phone Number" do |ee|
		    	ee.try(:booking).try(:phone_no)
			end
			row "Email" do |ee|
		    	ee.try(:booking).try(:email)
			end
			row "Coupon Code" do |ee|
		    	ee.try(:booking).try(:coupon_code)
			end
			row "Discount Value" do |ee|
		    	ee.try(:booking).try(:discount_value)
			end
			row "Discount Type" do |ee|
		    	ee.try(:booking).try(:discount_type)
			end
			row "Discount Price" do |ee|
		    	ee.try(:booking).try(:discount)
			end
			row "Total Price" do |ee|
		    	ee.try(:booking).try(:net_amount)
			end
			row "Check in date" do |ee|
		    	ee.try(:booking).try(:check_in_date)
			end
			row "Check out date" do |ee|
		    	ee.try(:booking).try(:check_out_date)
			end
			row "No of Rooms" do |ee|
		    	ee.try(:booking).try(:no_of_rooms)
			end
			row "No of Guests" do |ee|
		    	ee.try(:booking).try(:no_of_guests)
			end
			row :room_id
			row "Status" do |ee|
		    	ee.try(:booking).try(:status)
			end
		end
    end	

  
		
end

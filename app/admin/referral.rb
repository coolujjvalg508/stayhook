ActiveAdmin.register Referral do

menu label: 'Manage Referrals'

permit_params :referral_code, :discount_value, :discount_type, :valid_from, :valid_till, :status, :from, :to


	
	filter :to
	filter :from
	filter :referral_code
  	filter :discount_value
  	filter :valid_from
  	filter :valid_till
  	filter :status, as: :select, collection: [['Active',1], ['Inactive', 0]], label: 'Status'

	  index do
	    selectable_column
	    
	    column :from
	    column :to
	    column :referral_code
	    column :discount_value	
	    column :discount_type
	    column "Status" do |ee|
	      (ee.status == true) ? "Active" : "Inactive"
	    end
	    actions
	  end

	form multipart: true do |f|

	    f.inputs "Referral Details" do
	      f.input :from
	      f.input :to
	      f.input :referral_code
	      f.input :discount_value
	      f.input :discount_type, as: :select, collection: Coupon::DISCOUNT_TYPE, include_blank: 'Select Discount Type'
	      f.input :valid_from
	      f.input :valid_till
	      f.input :status, label: 'Is Active'
	    end
	    f.actions
  	end

  	show do
	    attributes_table do
	      row :from
	      row :to
	      row :referral_code
	      row :discount_value
	      row :discount_type
	      row :valid_from
	      row :valid_till
	      row "Status" do |ee|
	        (ee.status == true) ? "Active" : "Inactive"
	      end
	      row :created_at
	      row :updated_at
	    end
  	end
end

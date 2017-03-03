ActiveAdmin.register VendorRequest do

	menu false
	menu label: 'Vendor Requests', parent: 'Manage Vendor'
	#actions :all, except: [:new, :create, :edit, :update]
	permit_params :first_name, :last_name, :email, :phone_number, :address, :city_id, :status

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

  filter :email
  filter :first_name
  filter :last_name
  filter :phone_number
  filter :status, as: :select, collection: VendorRequest::STATUS, label: 'Status'
  filter :created_at


  action_item :back, only: :show do
	links = ""
   	links = link_to "Back", collection_path, method: :get
	  	#if vendor_request.status == 'Pending'
	  		links += link_to "Accept Request", admin_accept_vendor_request_path(id: vendor_request.id), method: :get, :style => "float:left; margin-right:5px; margin-left:25%;", data: { confirm: 'Are you sure you want to accept this?' }

	  		links += link_to "Reject Request", admin_reject_vendor_request_path(id: vendor_request.id), method: :get, :style => "float:left; margin-right:5px;", data: { confirm: 'Are you sure you want to reject this?' }
	  		
	  	#end
   	links
  end

  controller do
  	def accept_vendor_request
  		
        vendor_request = VendorRequest.find_by(id: params[:id])
        
        random_password = Array.new(8).map { (65 + rand(58)).chr }.join

        vendor_params = {}
        vendor_params[:email] = vendor_request[:email]
        vendor_params[:first_name] = vendor_request[:first_name]
        vendor_params[:last_name] = vendor_request[:last_name]
        vendor_params[:phone_number] = vendor_request[:phone_number]
        vendor_params[:city_id] = vendor_request[:city_id]
        vendor_params[:address] = vendor_request[:address]
        vendor_params[:status] = true
        vendor_params[:password] = random_password
        vendor_params[:password_confirmation] = random_password
				
		vendor = Vendor.new(vendor_params)
		if vendor.save
		    vendor_request.status = "Accepted"
        vendor_request.save(:validate => false)
          
          UserMailer.send_signup_email(vendor).deliver_later

        	redirect_to admin_vendor_requests_path, notice: 'Vendor request approved'
		else
			
			error = 'Unable to accept request'

			vendor.errors.each_with_index do |val, i|
				if i > 0
					error += ', ' + val[1]
				else
					error += ' : ' + val[1]
				end	
			end	

        	redirect_to admin_vendor_requests_path, notice: error
		end	

  	end

  	def reject_vendor_request
        vendor_request = VendorRequest.find_by(id: params[:id])
        vendor_request.status = "Rejected"
        vendor_request.save(:validate => false)
        redirect_to admin_vendor_requests_path, notice: 'Vendor request rejected'
  	end
    
  end

  index do
    selectable_column
    column :email
    column :first_name
    column :last_name
    column :phone_number
    column :city_id, label: 'City'
    column :created_at
    column :status
    actions
  end

  show do
    attributes_table do
      row :email
      row :first_name
      row :last_name
      row :phone_number
      row :city_id
      row :address
      row :status
      row :created_at
      row :updated_at
    end
  end


end

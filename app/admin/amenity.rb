ActiveAdmin.register Amenity do
	permit_params :name, :status
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

	index do
	    selectable_column
	   
	    column :name
	    column :created_at
	    column "Status" do |ee|
			(ee.status == true) ? "Active" : "Inactive"
		end
	    actions
  	end

  	show do
		attributes_table do

			row :name
			row "Status" do |ee|
				(ee.status == true) ? "Active" : "Inactive"
			end
			row :created_at
			row :updated_at


		end
	end

  filter :name
  filter :status
  filter :created_at

end

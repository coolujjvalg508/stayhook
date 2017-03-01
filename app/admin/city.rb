ActiveAdmin.register City do
    menu false
	menu label: 'City Management'
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


filter :name
	filter :status, as: :select, collection: [['Active',1], ['Inactive', 0]], label: 'Status'
	filter :created_at

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
		row :updated_atq	
		end
	end

	form do |f|

	    f.inputs "City Details" do
	      f.input :name
	      f.input :status, label: 'Is Active'
	    end

	    f.actions
	end

end

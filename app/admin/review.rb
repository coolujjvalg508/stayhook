ActiveAdmin.register Review do
	menu label: 'Manage Reviews'
	actions :all, except: [:new, :create]
	permit_params :user_id, :review, :rating, :room_id

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
	    column :review
	    column :rating
	    column :created_at
	    actions
  	end

  	show do
		attributes_table do
			row :name
			row :user_id
			row :review
			row :rating
		end
	end

  	form do |f|

	    f.inputs "Review Details" do
	      f.input :name
	      f.input :review
	      f.input :rating
	    end
	    f.actions
	end


end

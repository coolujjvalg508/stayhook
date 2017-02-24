ActiveAdmin.register User do
   menu false
   menu label: 'Users Management'
	permit_params :first_name, :last_name, :image, :email, :phone_number
  


  index do
    selectable_column
    id_column
    column :email
    column :first_name
    column :last_name
    column :phone_number
    column :created_at
    actions
  end

  filter :email
  filter :first_name
  filter :phone_number



  form do |f|
    f.inputs "Admin Details" do
      f.input :email
      f.input :first_name
      f.input :last_name
      f.input :phone_number
      f.input :password
      f.input :password_confirmation
    end
    f.actions
  end

  



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


end

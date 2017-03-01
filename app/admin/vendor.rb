ActiveAdmin.register Vendor do
  menu false
  menu label: 'Manage Vendor'
  permit_params :first_name, :last_name, :image, :email, :phone_number, :address, :city_id, :status, :password, :password_confirmation

  filter :email
  filter :first_name
  filter :last_name
  filter :phone_number
  filter :status, as: :select, collection: [['Active',1], ['Inactive', 0]], label: 'Status'
  filter :created_at

   index do
    selectable_column
    column :email
    column :first_name
    column :last_name
    column :phone_number
    column :city_id, label: 'City'
    column :created_at
    column "Status" do |ee|
		(ee.status == true) ? "Active" : "Inactive"
	end
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
      row "Status" do |ee|
		(ee.status == true) ? "Active" : "Inactive"
	  end
      row :created_at
      row :updated_at
      
    end
  end

  def update
    if params[:user][:password].blank?
      params[:user].delete("password")
      params[:user].delete("password_confirmation")
    end
    super
  end

  form multipart: true do |f|

    f.inputs "User Details" do
      f.input :email
      f.input :first_name
      f.input :last_name
      f.input :phone_number

      @cities = Hash[City.active.order('name ASC').pluck(:id, :name)]
      f.input :city_id, as: :select, collection: @cities.map{|id,name| [name,id] }, include_blank: 'Select City', label: 'City<abbr title="required">*</abbr>'.html_safe

      f.input :address
      f.input :status, label: 'Is Active'
    end

    f.inputs "Vendor Password" do
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

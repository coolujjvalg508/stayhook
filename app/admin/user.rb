ActiveAdmin.register User do
	
   menu label: 'Manage Users'
   permit_params :first_name, :last_name, :image, :email, :phone_number, :gender, :password, :password_confirmation, :status
  

  filter :email
  filter :first_name
  filter :phone_number
  filter :status, as: :select, collection: [['Active',1], ['Inactive', 0]], label: 'Status'

  index do
    selectable_column
    
    column :image do |cat|
      unless !cat.image.present?
        image_tag(cat.try(:image).try(:url, :thumb), width: '50')
      end
    end
    
    column :first_name
    column :last_name
    column :email
    column :phone_number
    column "Status" do |ee|
      (ee.status == true) ? "Active" : "Inactive"
    end
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :email
      row :first_name
      row :last_name
      row :phone_number
      row :gender
      row "Status" do |ee|
        (ee.status == true) ? "Active" : "Inactive"
      end
      row :created_at
      row :updated_at
      row :image do |cat|
        unless !cat.image.present?
          image_tag(cat.try(:image).try(:url, :thumb))
        end
      end
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
      f.input :gender, as: :select, collection: User::GENDER, include_blank: 'Select Gender'
      f.input :phone_number
      f.input :status, label: 'Is Active'
    end

    f.inputs "User Password" do
      f.input :password
      f.input :password_confirmation
    end

    f.inputs "Profile Image" do
      f.input :image, :hint => image_tag(f.object.try(:image).try(:url, :thumb))
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

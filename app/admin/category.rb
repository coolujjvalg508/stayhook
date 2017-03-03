ActiveAdmin.register Category do

menu label: 'Manage Category'
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


  permit_params :name, :parent_id, :status

  filter :name
  filter :parent_id, as: :select, collection: Category.where("parent_id IS NULL").order('name ASC').pluck(:name, :id), label: 'Parent'
  filter :status, as: :select, collection: [['Active',1], ['Inactive', 0]], label: 'Status'
  filter :created_at

  
  
    index do
		selectable_column
		
		column :name
		column :parent do |cat|
		  Category.find_by(id: cat.parent_id).try(:name)
		end
		column "Status" do |ee|
			(ee.status == true) ? "Active" : "Inactive"
		end
		column :created_at
		actions
	end

	
  
	
  show do
    attributes_table do
      row :name
      row :parent do |cat|
       Category.find_by(id: cat.parent_id).try(:name)
     end
      row "Status" do |ee|
			(ee.status == true) ? "Active" : "Inactive"
		end
      row :created_at
    end
  end

  form multipart: true do |f|

      f.inputs "Category Detail" do
      f.input :parent_id, as: :select, collection: Category.where("parent_id IS NULL AND id != ?", f.object.id.to_i).order('name ASC').pluck(:name, :id), include_blank: 'Select Parent'
      f.input :name
      f.input :status, label: 'Is Active'
      
    end

      f.actions
  end

end

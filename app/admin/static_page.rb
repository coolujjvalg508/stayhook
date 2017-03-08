ActiveAdmin.register StaticPage do

	menu label: 'Manage Static Pages'
	permit_params :title, :status, :url, :content
	actions :all, except: [:new, :create, :destroy]

	filter :title
	filter :url
	filter :status, as: :select, collection: [['Active',1], ['Inactive', 0]], label: 'Status'
	filter :created_at

	# Index
	index do
		selectable_column
		column :title
		column :url
		column 'Content' do |page|
			ActionView::Base.full_sanitizer.sanitize(page.content.html_safe).gsub(/\n\t\t\s+/, '').first(60)
		end  
		column "Status" do |ee|
			(ee.status == true) ? "Active" : "Inactive"
		end
		actions   
	end

	show do
		attributes_table do

		row :title
		row :url
		row "Status" do |ee|
			(ee.status == true) ? "Active" : "Inactive"
		end

		row 'Content' do |sp|
	        text_node sp.content.html_safe
	    end

		row :created_at
		row :updated_at	
		end
	end


	form do |f|

		    f.inputs "Static Page" do
		    	f.input :title	
		    	f.input :url, :label => 'Page Url', :as => :string, :input_html => { :disabled => true }
		      	div do
					f.input :content,  :input_html => { :class => "tinymce" }, :rows => 20, :cols => 20 ,label: false
			  	end

		      f.input :status, label: 'Is Active'
		    end

		    f.actions
		end

	end

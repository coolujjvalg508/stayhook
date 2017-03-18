ActiveAdmin.register Room do

	menu label: 'Manage Rooms'
	permit_params :room_number, :vendor_id, :room_for, :no_of_bed, :category_id, :sub_category_id, {:amenities => []} , :price, :price_charge_type, :images_attributes => [:id,:image,:caption,:imageable_id,:imageable_type, :_destroy,:tmp_image,:image_cache]



	filter :room_number

	@vendors = Hash[Vendor.order('email ASC').pluck(:id, :email)]
	filter :vendor_id, as: :select, collection: @vendors.map{|id,email| [email,id] }, label: 'Vendor'

	filter :room_for, as: :select, collection: Room::ROOM_FOR, label: 'Room For'
	filter :no_of_bed, as: :select, collection: Room::NO_OF_BED, label: 'No. Of Bed'
	@categories = Hash[Category.only_parent.active.order('name ASC').pluck(:id, :name)]
	filter :category_id, as: :select, collection: @categories.map{|id,name| [name,id] }, label: 'Category'
	filter :created_at

	collection_action :get_sub_categories, method: :get do
	    category = Category.active.where(parent_id: params[:category_id].to_s)
	    render json: category, status: 200
	end

	index do
	    selectable_column
	    
	    column :room_number

	    column "Vendor" do |ee|
			ee.vendor.first_name + ' ' + ee.vendor.last_name + ' (' + ee.vendor.email + ')'
		end

	    column :room_for
	    column :no_of_bed
	    column :category_id
	    column :sub_category_id
	    column :created_at

	    actions
  	end

  	show do
		attributes_table do

			row :room_number
			
			row "Vendor" do |ee|
				ee.vendor.first_name + ' ' + ee.vendor.last_name + ' (' + ee.vendor.email + ')'
			end

		    row :room_for
		    row :no_of_bed
		    row :category_id
		    row :sub_category_id
			
			row "Amenities" do |ee|
				amenities_list = ee.amenities
	            amenities_list.reject!{|a| a==""}
				amenities_data = Amenity.where("id IN (?)", amenities_list);
				val = '';
				amenities_data.each_with_index do |e, i|
					if i > 0
						val += ', '
					end
					val += e.name	
				end	
				val
			end
            row :price
            row :price_charge_type
			row :created_at
			row :updated_at

			row 'Images' do
		        ul class: "image-blk" do
		          if room.images.present?
		            room.images.each do |img|
		            span do
		              image_tag(img.try(:image).try(:thumb).try(:url), class: "show-img")
		            end
		            end
		          end
		        end
		    end	

		end
	end


  	form multipart: true do |f|

	    f.inputs "Room Details" do
	    	f.input :room_number
      		f.input :vendor_id, as: :select, collection: Vendor.active.order('email ASC').pluck(:email, :id), include_blank: 'Select Vendor'
      		f.input :room_for, as: :select, collection: Room::ROOM_FOR, include_blank: 'Select Room For'
      		f.input :no_of_bed, as: :select, collection: Room::NO_OF_BED, include_blank: 'Select No. Of Bed'
      		
      		@categories = Hash[Category.only_parent.active.order('name ASC').pluck(:id, :name)]
			f.input :category_id, as: :select, collection: @categories.map{|id,name| [name,id] }, include_blank: 'Select Category'

			@sub_categories = {}
			if f.object.category_id.present?
				@sub_categories = Hash[Category.active.where('parent_id = ?', f.object.category_id).order('name ASC').pluck(:id, :name)]
			end

      		f.input :sub_category_id, as: :select, collection: @sub_categories.map{|id,name| [name,id] }, include_blank: 'Select Sub Category'
            f.input :price
            f.input :price_charge_type, as: :select, collection: Room::PRICE_CHARGE_TYPE, include_blank: 'Select Price Charge Type'
      		f.input :amenities, as: :select, collection: Amenity.where("id IS NOT NULL").pluck(:name, :id), :input_html => { :class => "chosen-input" }, include_blank: false, multiple: true

	    end
	    f.inputs 'Images' do
		    f.has_many :images, allow_destroy: true, new_record: true do |ff|
		        ff.input :image, label: "Image", hint: ff.template.image_tag(ff.object.image.try(:url,:thumb))
		        ff.input :image_cache, :as => :hidden
		        ff.input :caption
		    end 
	    end

	    f.actions
	end


	controller do
    def create
     
      if (params[:room].present? && params[:room][:images_attributes].present?)
          params[:room][:images_attributes].each do |index,img|
              unless params[:room][:images_attributes][index][:image].present?
              params[:room][:images_attributes][index][:image] = params[:room][:images_attributes][index][:image_cache]
              params[:room][:images_attributes][index][:caption] = params[:room][:images_attributes][index][:caption]
              end
          end
        super
      
      else
        super
      end
    end

    def update

      if (params[:room].present? && params[:room][:images_attributes].present?)
          params[:room][:images_attributes].each do |index,img|
              unless params[:room][:images_attributes][index][:image].present?
              params[:room][:images_attributes][index][:image]  = params[:room][:images_attributes][index][:image_cache]
              end
          params[:room][:images_attributes][index][:caption]  = params[:room][:images_attributes][index][:caption]
        end
      super
    
     else
        super
      end
      
    end
      
  end

	
end

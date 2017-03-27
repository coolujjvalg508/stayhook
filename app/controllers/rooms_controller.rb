class RoomsController < ApplicationController

	layout 'application1', :only => [:search_listing]
    before_action :authenticate_user!, :only => [:save_like]
	def search_listing
		#abort(params[:filter][:city].to_json)

        #conditions = []
        conditions = "vendors.status = true "

        if params[:filter].present?
			
			#attributes = params[:filter]
			#attributes.delete_if {|k,v| v.blank?}
			#attributes.each do |attribute, value|
			#conditions << "#{attribute.to_s} = #{value.to_s}"
			#end
			if !params[:filter][:city].blank?
				conditions += " AND vendors.city_id = #{params[:filter][:city]} " 
			end

			if !params[:filter][:address].blank?
				conditions += " AND vendors.address LIKE '%#{params[:filter][:address]}%' " 
			end

			if !params[:filter][:room_for].blank?
				conditions += " AND rooms.room_for = '#{params[:filter][:room_for]}' " 
			end
		end


        #abort(conditions.to_json)
		@filter_detail = Room.joins(:vendor).where(conditions)

		@filter_detail = @filter_detail.page(params[:page]).per(10)
		#abort(@pagination_detail.to_json)
		@amenity_detail = Amenity.active.order('name ASC')
		@facility_detail = Facility.active.order('name ASC')

        #abort(@amenity_detail.to_json)
		#@filter_detail.each do |val|


			#abort(val.amenities.to_json)
		#end
		    
	end

	def hotels_detail
		@hotels_detail = Room.find_by(id: params[:id])
		@similar_stays = Room.where.not(id: @hotels_detail.id).where(room_for: @hotels_detail.room_for).limit(3)

		#abort(@similar_stays.to_json)
		#@hotels_detail.amenities.each do |amenity| 

			#@amenity_detail = Amenity.find_by(id: amenity.amenities)
		#end
		
          #abort(amenity.to_json)
		
		if !@hotels_detail.	present?
			redirect_to root_path, notice: 'Invalid access!'
		end
        if @hotels_detail.present?
			amenities_list = @hotels_detail['amenities']
	        amenities_list.reject!{|a| a==""}
	        @amenities_data = Amenity.where("id IN (?)", amenities_list);
	    end
	    if current_user.present?
        	@user_id = current_user.id
    	else
           @user_id = ""
    	end

		#abort(@user_id.to_json);
		#abort(@hotels_detail.room.to_json);
		#abort(@hotels_detail.images.to_json);
	end

	def save_like
          room_id     = params[:room_id]
          user_id      = params[:user_id]
          is_like_exist  = Favourite.where(user_id: user_id, room_id: room_id).first
          result        = ''
          activity_type = ''
          if is_like_exist.present?
                activity_type = 'disliked'
                Favourite.where(user_id: user_id, room_id: room_id).delete_all 

                result  = {'res' => 0, 'message' => 'Post has disliked'}
          else
                activity_type = 'liked'
                Favourite.create(user_id: user_id, room_id: room_id)  
 
                result  = {'res' => 1, 'message' => 'Post has liked'}

          end 

          render json: result, status: 200       
    end  

     def check_save_like
          room_id     = params[:room_id]
          user_id        = params[:user_id]
          is_like_exist  = Favourite.where(user_id: user_id, room_id: room_id).first
          result = ''
          if is_like_exist.present?
                result  = {'res' => 1, 'message' => 'Post has already liked'}
          else
                result  = {'res' => 0, 'message' => 'Post has not liked'}
          end 
         
          render json: result, status: 200       
    end  
end

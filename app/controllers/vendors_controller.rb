class VendorsController < ApplicationController

	def hotels_detail
		@hotels_detail = Room.find_by(id: params[:id])
		#abort(@hotels_detail.amenities.to_json)
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

		#abort(@hotels_detail.images.to_json);
		#abort(@hotels_detail.room.to_json);
		#abort(@hotels_detail.images.to_json);
	end
end

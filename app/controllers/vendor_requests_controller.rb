class VendorRequestsController < ApplicationController

	
	def new
		@vendor_request = VendorRequest.new
	end

	def create

		@vendor_request = VendorRequest.new(vendor_request_params)
		if @vendor_request.save
			redirect_to root_path, notice: 'Request has been successfully submitted, Our team will responde you soon'
		else
			render 'new'
		end

	end

	private
	def vendor_request_params
		params.require(:vendor_request).permit(:first_name, :last_name, :email, :city_id, :address, :phone_number)
	end


end
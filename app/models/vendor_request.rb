class VendorRequest < ActiveRecord::Base

	belongs_to :city

	STATUS = ['Pending', 'Accepted', 'Rejected']

	validates :first_name, presence: true
	validates :city_id, presence: true
	validates :address, presence: true
	validates :email, presence: {message: "Email can't be blank"}
	validates :email, confirmation: true
	validates :phone_number, presence: true
	validate :validate_email
	validate :validate_phone_number
 
  	def validate_email
    	
  		request_data = VendorRequest.where("status IN ('Pending', 'Accepted') AND email = ?", email).first

  		if request_data.present?
      		errors.add(:email, "Request already sent with this email")

      	else
      		vendor_data = Vendor.where("email = ?", email).first
      		if vendor_data.present?
      			errors.add(:email, "Email already registered")
      		end
      	end
    	
  	end

  	def validate_phone_number
    	
  		request_data = VendorRequest.where("status IN ('Pending', 'Accepted') AND phone_number = ?", phone_number).first

  		if request_data.present?
      		errors.add(:phone_number, "Request already sent with this phone number")

      	else
      		vendor_data = Vendor.where("phone_number = ?", phone_number).first
      		if vendor_data.present?
      			errors.add(:phone_number, "Phone number already registered")
      		end
      	end
    	
  	end

end

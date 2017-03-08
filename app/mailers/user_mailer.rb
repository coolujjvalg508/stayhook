class UserMailer < ApplicationMailer
	  default :from => "Stayhook  <#{ ENV['DEFAULT_FROM_EMAIL'] }>"

	  # send a signup email to the user, pass in the user object that   contains the user's email address
	  def send_signup_email(vendor, password)

	    @vendor = vendor
	    @password = password
	    mail( :to => @vendor.email,
	    :subject => 'Thanks for signing up for our amazing app' )
	  end

	   def send_reject_email(vendor_request)
	  	#abort(ENV['DEFAULT_FROM_EMAIL'].to_json)
	    @vendor_request = vendor_request
	    #abort(@vendor_request.email.to_json)
	    mail( :to => @vendor_request.email,
	    :subject => 'Vendor request rejection' )
	  end

end

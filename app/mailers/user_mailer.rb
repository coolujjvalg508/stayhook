class UserMailer < ApplicationMailer
	  default :from => "StayHook  <#{ ENV['DEFAULT_FROM_EMAIL'] }>"


	  # send a signup email to the user, pass in the user object that   contains the user's email address
	  def send_signup_email(vendor, password)
	  	#abort(ENV['DEFAULT_FROM_EMAIL'].to_json)
	    @vendor = vendor
	    @password = password
	    #abort(@vendor.email.to_json)
	    mail( :to => @vendor.email,
	    :subject => 'Vendor request acceptance' )
	  end

	  def send_reject_email(vendor)
	  	#abort(ENV['DEFAULT_FROM_EMAIL'].to_json)
	    @vendor = vendor
	    #abort(@vendor.email.to_json)
	    mail( :to => @vendor.email,
	    :subject => 'Vendor request rejection' )
	  end

end

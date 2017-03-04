class UserMailer < ApplicationMailer
	  default :from => "StayHook  <#{ ENV['DEFAULT_FROM_EMAIL'] }>"


	  # send a signup email to the user, pass in the user object that   contains the user's email address
	  def send_signup_email(vendor)
	  	#abort(ENV['DEFAULT_FROM_EMAIL'].to_json)
	    @vendor = vendor
	    #abort(@vendor.email.to_json)
	    mail( :to => @vendor.email,
	    :subject => 'Thanks for signing up for our amazing app' )
	  end

end

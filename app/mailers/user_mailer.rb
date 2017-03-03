class UserMailer < ApplicationMailer
	  default :from => "Desolate Eyrie  <#{ ENV['DEFAULT_FROM_EMAIL'] }>"

	  # send a signup email to the user, pass in the user object that   contains the user's email address
	  def send_signup_email(vendor)
	    @vendor = vendor
	    #abort(@vendor.email.to_json)
	    mail( :to => @vendor.email,
	    :subject => 'Thanks for signing up for our amazing app' )
	  end

end

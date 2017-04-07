class UsersController < ApplicationController

	before_action :authenticate_user!

	layout 'application_profile'
	def account_setting
		@user = current_user
		@open_tab = ''
		
	end
	def booking_history
		@user = current_user
	end
	def update_profile
		
		@user = current_user
		@open_tab = ''
		if (params[:user][:password].present?)

			if @user.update_with_password(user_params)
				# Sign in the user by passing validation in case their password changed
				sign_in @user, :bypass => true
				flash[:notice] = "Password changed successfully."
				render 'account_setting'
			else
				if (@user.errors.messages[:current_password].present? && @user.errors.messages[:current_password][0] == "is invalid")
					@old_error_msg = "Please enter correct old password."
				end
				@open_tab = 'change_password';
				render 'account_setting'
			end

		else	
           
			if @user.update_attributes(user_params)
		  		flash[:notice] = "Profile updated successfully."	
		      	redirect_to account_setting_path
		    else
		      	render 'account_setting'
		    end

		end		

	    
	end

	private
	def user_params
		params.require(:user).permit(:first_name, :last_name, :email, :gender, :password, :current_password, :image)
	end
end

class WelcomeController < ApplicationController

	def index
	end

	def about_us

		@aboutpage_detail = StaticPage.find_by(title: 'About Us')
		#abort(@aboutpage_detail.to_json)
	end

	def contact_us
	end

end
class Facility < ActiveRecord::Base
	validates	:name, presence: {message: "Facility name can't be blank"}
end

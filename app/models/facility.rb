class Facility < ActiveRecord::Base
	validates	:name, presence: {message: "Name can't be blank"}
end

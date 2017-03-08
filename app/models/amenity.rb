class Amenity < ActiveRecord::Base
	validates	:name, presence: {message: "Amenity name can't be blank"}
end

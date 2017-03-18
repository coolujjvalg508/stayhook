class Amenity < ActiveRecord::Base

	mount_uploader :image, IconUploader

	scope :active, -> { where(status: true) }
	validates	:name, presence: {message: "Amenity name can't be blank"}

end

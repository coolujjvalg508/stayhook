class Facility < ActiveRecord::Base

	mount_uploader :image, IconUploader
	
	scope :active, -> { where(status: true) }
	validates	:name, presence: {message: "Facility name can't be blank"}
end

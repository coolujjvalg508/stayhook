class Image < ActiveRecord::Base
	mount_uploader :image, ImageUploader
	attr_accessor :tmp_image
end

class Room < ActiveRecord::Base

	belongs_to :vendor
	belongs_to :category, :class_name => "Category", :foreign_key => "category_id"
	belongs_to :sub_category, :class_name => "Category", :foreign_key => "sub_category_id"

	has_many :images, as: :imageable, dependent: :destroy
 	has_many :caption
	
	ROOM_FOR = ['King', 'Queen', 'Family']
	NO_OF_BED = ['1', '2', '3', '4']
	PRICE_CHARGE_TYPE = ['Per Night', 'Per Month']

	validates :room_number, presence: true
	validates :vendor_id, presence: true
	validates :room_for, presence: true
	validates :no_of_bed, presence: true
	validates :category_id, presence: true
	validates :price, presence: true
	validates :price_charge_type, presence: true

	accepts_nested_attributes_for :images, reject_if: proc { |attributes| attributes['image'].blank? || attributes['image'].nil? }, allow_destroy: true 

end

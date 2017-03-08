class Room < ActiveRecord::Base

	belongs_to :vendor
	belongs_to :category, :class_name => "Category", :foreign_key => "category_id"
	belongs_to :sub_category, :class_name => "Category", :foreign_key => "sub_category_id"

	ROOM_FOR = ['King', 'Queen', 'Couple']
	NO_OF_BED = ['1', '2', '3', '4']

	validates :room_number, presence: true
	validates :vendor_id, presence: true
	validates :room_for, presence: true
	validates :no_of_bed, presence: true
	validates :category_id, confirmation: true

end

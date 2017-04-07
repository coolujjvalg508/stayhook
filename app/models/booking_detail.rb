class BookingDetail < ActiveRecord::Base

	belongs_to :booking
	belongs_to :room
end

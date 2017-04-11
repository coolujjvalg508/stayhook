class Referral < ActiveRecord::Base

	scope :active, -> { where(status: true) }

	scope :available, -> { where("valid_from <= CURRENT_DATE AND valid_till >= CURRENT_DATE") }

	DISCOUNT_TYPE = ['Percent', 'Amount']
    

	validates :from, presence: {message: "Referral from can't be blank"}
	validates :to, presence: {message: "Referral to can't be blank"}
	validates :referral_code, presence: {message: "Referral code can't be blank"}
	validates :referral_code, uniqueness: {message: 'Referral code is already exist'}
	validates :discount_value, presence: {message: "Discount value can't be blank"}
	validates :discount_type, presence: {message: "Please select Discount type"}
	validates :valid_from, presence: {message: "Valid From date Required"}
	validates :valid_till, presence: {message: "Valid Till date Required"}
end

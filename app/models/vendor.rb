class Vendor < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  	devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable
    
    belongs_to :city

    mount_uploader :image, ImageUploader
 	has_many :room

    scope :active, -> { where(status: true) }
	
	validates :first_name, presence: true
	validates :city_id, presence: true
	validates :address, presence: true
	validates :email, presence: {message: "Email can't be blank"}
	validates :email, confirmation: true
	validates :email, uniqueness: {message: 'Email is already registered'}
	validates :phone_number, presence: true
	validates :phone_number, uniqueness: {message: 'Phone number is already registered'}
	validates :password, confirmation: true
	validates :password, presence: {message: "Password can't be blank"}, on: :create
	validates :password_confirmation, presence: {message: "Password confirmation can't be blank"}, on: :create

	

	def active_for_authentication?
	    super && special_condition_is_valid?
	end
	   
	def inactive_message
	    "Sorry, this account is deactivated!"
	end

	def special_condition_is_valid?
	    return self.status
	end 

end

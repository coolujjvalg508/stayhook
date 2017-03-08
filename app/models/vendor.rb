class Vendor < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  	devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable
    
    belongs_to :city

    has_many :images, as: :imageable, dependent: :destroy
 	has_many :caption

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

	accepts_nested_attributes_for :images, reject_if: proc { |attributes| attributes['image'].blank? || attributes['image'].nil? }, allow_destroy: true 

	/def active_for_authentication?
        # Uncomment the below debug statement to view the properties of the returned self model values.
        # logger.debug self.to_yaml

        super && account_active?
    end/

end

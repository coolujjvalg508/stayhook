class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable


   mount_uploader :image, ImageUploader

   validates :first_name, presence: true
   validates :email, presence: {message: "Email can't be blank"}
   validates :email, confirmation: true
   validates :email, uniqueness: {message: 'Email is already registered'}
   validates :phone_number, presence: true
   validates :phone_number, uniqueness: {message: 'Phone number is already registered'}
   validates :password, confirmation: true
   validates :password, presence: {message: "Password can't be blank"}, on: :create
   validates :password_confirmation, presence: {message: "Password confirmation can't be blank"}, on: :create
   
end

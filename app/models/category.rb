class Category < ActiveRecord::Base
	############## scopes ############
    scope :active, -> { where(status: true) }

	validates	:name, presence: {message: "Category name can't be blank"}
end

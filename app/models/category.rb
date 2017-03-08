class Category < ActiveRecord::Base
	############## scopes ############
    scope :active, -> { where(status: true) }
    scope :only_parent, -> { where("parent_id IS NULL") }

	validates	:name, presence: {message: "Category name can't be blank"}
end

class City < ActiveRecord::Base

	############## scopes ############
    scope :active, -> { where(status: true) }

	validates	:name, presence: {message: "City name can't be blank"}
end

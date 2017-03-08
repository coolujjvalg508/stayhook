class StaticPage < ActiveRecord::Base

	validates :title, :url, :content, presence: true
end

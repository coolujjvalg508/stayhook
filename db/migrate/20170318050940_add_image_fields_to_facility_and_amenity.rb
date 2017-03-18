class AddImageFieldsToFacilityAndAmenity < ActiveRecord::Migration
  def change

  	add_column :facilities, :image, :string
  	add_column :amenities, :image, :string

  end
end

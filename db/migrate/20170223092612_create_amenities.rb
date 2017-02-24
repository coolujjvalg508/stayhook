class CreateAmenities < ActiveRecord::Migration
  def change
    create_table :amenities do |t|
      t.string :name
      t.boolean :status, null: false, default: true
      t.timestamps null: false
    end
  end
end

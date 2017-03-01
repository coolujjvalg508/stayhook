class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.boolean :status, null: false, default: true
      t.timestamps null: false
    end
  end
end

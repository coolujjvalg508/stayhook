class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
        t.string :name
		t.text :review
		t.integer :room_id
		t.integer :user_id
		t.integer :rating

      	t.timestamps null: false
    end
  end
end

class CreateReferrals < ActiveRecord::Migration
  def change
    create_table :referrals do |t|
    	t.string :from
        t.string :to
        t.string :message
      	t.string :referral_code, :limit => 20
		t.integer :discount_value
		t.string :discount_type
		t.date :valid_from
		t.date :valid_till
		t.boolean :status, null: false, default: true
      t.timestamps null: false
    end
  end
end

class AddStatusAndOtptousers < ActiveRecord::Migration
  def change
  	add_column :users, :status, :boolean, null: false, default: false
  	add_column :users, :otp, :string, :limit => 20
  end
end

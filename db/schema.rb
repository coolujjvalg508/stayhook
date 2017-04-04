# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170404094319) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string   "namespace"
    t.text     "body"
    t.string   "resource_id",   null: false
    t.string   "resource_type", null: false
    t.integer  "author_id"
    t.string   "author_type"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "active_admin_comments", ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id", using: :btree
  add_index "active_admin_comments", ["namespace"], name: "index_active_admin_comments_on_namespace", using: :btree
  add_index "active_admin_comments", ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id", using: :btree

  create_table "admin_users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "admin_users", ["email"], name: "index_admin_users_on_email", unique: true, using: :btree
  add_index "admin_users", ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true, using: :btree

  create_table "amenities", force: :cascade do |t|
    t.string   "name"
    t.boolean  "status",     default: true, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "image"
  end

  create_table "booking_details", force: :cascade do |t|
    t.integer  "room_id"
    t.integer  "booking_id"
    t.string   "room_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "name"
    t.string   "phone_no"
    t.string   "email"
    t.string   "coupon_code"
    t.string   "discount_value"
    t.string   "discount_type"
    t.string   "discount"
    t.string   "net_amount"
    t.string   "check_in_date"
    t.string   "check_out_date"
    t.integer  "no_of_rooms"
    t.integer  "no_of_guests"
    t.string   "status"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.integer  "parent_id"
    t.boolean  "status",     default: true, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string   "name"
    t.boolean  "status",     default: true, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "coupons", force: :cascade do |t|
    t.string   "coupon_code",    limit: 20
    t.integer  "discount_value"
    t.string   "discount_type"
    t.date     "valid_from"
    t.date     "valid_till"
    t.boolean  "status",                    default: true, null: false
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
  end

  create_table "facilities", force: :cascade do |t|
    t.string   "name"
    t.boolean  "status",     default: true, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "image"
  end

  create_table "favourites", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "room_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade do |t|
    t.string   "image"
    t.integer  "imageable_id",   null: false
    t.string   "imageable_type", null: false
    t.string   "caption"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "images", ["imageable_id"], name: "index_images_on_imageable_id", using: :btree
  add_index "images", ["imageable_type"], name: "index_images_on_imageable_type", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.string   "name"
    t.text     "review"
    t.integer  "room_id"
    t.integer  "user_id"
    t.integer  "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rooms", force: :cascade do |t|
    t.string   "room_number"
    t.integer  "vendor_id"
    t.string   "room_for"
    t.integer  "no_of_bed"
    t.integer  "category_id"
    t.integer  "sub_category_id"
    t.json     "amenities"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.integer  "price"
    t.string   "price_charge_type"
    t.text     "description"
    t.text     "house_rules"
    t.text     "cancellation_policy"
    t.integer  "accommodate"
    t.integer  "no_of_bedroom"
    t.integer  "no_of_bathroom"
    t.boolean  "couples_allowed",     default: true, null: false
    t.boolean  "family_allowed",      default: true, null: false
  end

  create_table "static_pages", force: :cascade do |t|
    t.string   "title",                     null: false
    t.string   "url",                       null: false
    t.text     "content"
    t.boolean  "status",     default: true, null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                             default: "",    null: false
    t.string   "encrypted_password",                default: "",    null: false
    t.string   "phone_number",                      default: "",    null: false
    t.string   "first_name",                        default: "",    null: false
    t.string   "last_name",                         default: "",    null: false
    t.string   "image",                             default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                     default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                                        null: false
    t.datetime "updated_at",                                        null: false
    t.boolean  "status",                            default: false, null: false
    t.string   "otp",                    limit: 20
    t.string   "gender"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "vendor_requests", force: :cascade do |t|
    t.string   "email",                     default: "",        null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "phone_number"
    t.integer  "city_id"
    t.string   "address",      limit: 1000
    t.string   "status",                    default: "Pending"
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
  end

  create_table "vendors", force: :cascade do |t|
    t.string   "email",                               default: "",    null: false
    t.string   "encrypted_password",                  default: "",    null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "phone_number"
    t.integer  "city_id"
    t.string   "address",                limit: 1000
    t.string   "image"
    t.boolean  "status",                              default: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                       default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                                          null: false
    t.datetime "updated_at",                                          null: false
  end

  add_index "vendors", ["email"], name: "index_vendors_on_email", unique: true, using: :btree
  add_index "vendors", ["reset_password_token"], name: "index_vendors_on_reset_password_token", unique: true, using: :btree

end

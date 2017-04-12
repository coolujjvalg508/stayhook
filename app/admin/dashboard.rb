ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do
    
    columns do
        column do
            panel "User Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Admin Users'
                        end
                        span class: 'dash_right' do
                           link_to(AdminUser.count, 'admin_users')
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Front Users'
                        end
                        span class: 'dash_right' do
                           link_to(User.count, 'users')
                        end
                    end
                end
            end
        end
        column do
            panel "Vendor Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Total vendors'
                        end
                        span class: 'dash_right' do
                           link_to(Vendor.count, 'vendors')
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Vendor Requests'
                        end
                        span class: 'dash_right' do
                            link_to(VendorRequest.count, 'vendor_requests')
                        end
                    end
                end
            end
        end
        column do
            panel "Amenity Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Total Amenities'
                        end
                        span class: 'dash_right' do
                           link_to(Amenity.count, 'amenities')
                        end
                    end
                end
            end
        end
        column do
            panel "Rooms Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Total Rooms'
                        end
                        span class: 'dash_right' do
                           link_to(Room.count, 'rooms')
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Total Bookings'
                        end
                        span class: 'dash_right' do
                           link_to(Booking.count, 'booking_details')
                        end
                    end
                end
            end
        end  
    end
    columns do
        column do
            panel "City Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Total Bookings'
                        end
                        span class: 'dash_right' do
                           link_to(City.count, 'cities')
                        end
                    end
                end
            end
        end
        column do
            panel "Category Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Total Categories'
                        end
                        span class: 'dash_right' do
                           link_to(Category.count, 'categories')
                        end
                    end
                end
            end
        end
        column do
            panel "Coupon/Referral Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Coupons'
                        end
                        span class: 'dash_right' do
                           link_to(Coupon.count, 'coupons')
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Referrals'
                        end
                        span class: 'dash_right' do
                           link_to(Referral.count, 'referrals')
                        end
                    end
                end
            end
        end
        column do
            panel "Review Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Total Reviews'
                        end
                        span class: 'dash_right' do
                           link_to(Review.count, 'reviews')
                        end
                    end
                end
            end  
        end
    end
    
  end 
end

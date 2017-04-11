ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do
    
    columns do
        column do
            panel "Admin Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Admin Users'
                        end
                        span class: 'dash_right' do
                           1
                        end
                    end
                end
            end
        end
        column do
            panel "User Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Front Users'
                        end
                        span class: 'dash_right' do
                           4
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Active Users'
                        end
                        span class: 'dash_right' do
                            1
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'InActive Users'
                        end
                        span class: 'dash_right' do
                            1
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
                           4
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Active Amenities'
                        end
                        span class: 'dash_right' do
                            4
                        end
                    end
                end
            end
        end
        column do
            panel "Vendor Request Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Pending Requests'
                        end
                        span class: 'dash_right' do
                           12
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Accepted Requests'
                        end
                        span class: 'dash_right' do
                            4
                        end
                    end
                end
            end
        end
    end
    columns do
        column do
            panel "Booking Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Total Bookings'
                        end
                        span class: 'dash_right' do
                           10
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Confirm Bookings'
                        end
                        span class: 'dash_right' do
                            5
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Cancelled bookings'
                        end
                        span class: 'dash_right' do
                            4
                        end
                    end
                end
            end
        end
        column do
            panel "User Section" do
                ul do
                    li do
                        span class: 'dash_left' do
                            'Cities'
                        end
                        span class: 'dash_right' do
                           5
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Active Cities'
                        end
                        span class: 'dash_right' do
                            3
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
                            'Vendors'
                        end
                        span class: 'dash_right' do
                           10
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Active Vendors'
                        end
                        span class: 'dash_right' do
                            6
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'InActive Vendor'
                        end
                        span class: 'dash_right' do
                            1
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
                           4
                        end
                    end
                    li do
                        span class: 'dash_left' do
                            'Active Categories'
                        end
                        span class: 'dash_right' do
                            3
                        end
                    end
                end
            end
            
        end
    end
    
  end 
end

Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  
  #ActiveAdmin.routes(self)
  begin
    ActiveAdmin.routes(self)
  rescue Exception => e
    puts "ActiveAdmin: #{e.class}: #{e}"
  end

  devise_for :users, controllers: {registrations: 'users/registrations', sessions: 'users/sessions'}
  devise_for :vendors, controllers: {sessions: 'vendors/sessions'}
  
  root 'welcome#index'
  get 'about-us' => 'welcome#about_us', as: "about_us"
  get 'contact-us' => 'welcome#contact_us', as: "contact_us"
  get 'work-with-us' => 'vendor_requests#new', as: "create_vendor_request"
  post 'work-with-us' => 'vendor_requests#create', as: "save_vendor_request"
  get 'hotel-detail/:id' => 'rooms#hotels_detail', as: "hotels_detail"
  get 'search-listing' => 'rooms#search_listing', as: "search_listing"
  get 'account-setting' => 'users#account_setting', as: "account_setting"
  get 'booking-history' => 'users#booking_history', as: "booking_history"
 

  namespace :backend do
    get 'dashboard' => 'dashboard#index', as: "dashboard"
    get 'login' => 'login#login', as: "login"
    get 'overview' => 'dashboard#overview', as: "overview"
    get 'booking' => 'dashboard#booking', as: "booking"
    get 'check-in' => 'dashboard#check_in', as: "check_in"
    get 'check-out' => 'dashboard#check_out', as: "check_out"
  end

  namespace :user do
    get 'dashboard' => 'dashboard#index', as: "dashboard"
  end  

  namespace :admin do
    get 'accept_vendor_request' => 'vendor_requests#accept_vendor_request'
    get 'reject_vendor_request' => 'vendor_requests#reject_vendor_request'
  end

end

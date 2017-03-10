Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  
  #ActiveAdmin.routes(self)
  begin
    ActiveAdmin.routes(self)
  rescue Exception => e
    puts "ActiveAdmin: #{e.class}: #{e}"
  end

  devise_for :users, controllers: {registrations: 'users/registrations', sessions: 'sessions'}
  devise_for :vendors
  
  root 'welcome#index'
  get 'about-us' => 'welcome#about_us', as: "about_us"
  get 'contact-us' => 'welcome#contact_us', as: "contact_us"
  get 'work-with-us' => 'vendor_requests#new', as: "create_vendor_request"
  post 'work-with-us' => 'vendor_requests#create', as: "save_vendor_request"
 

  namespace :backend do
    get 'dashboard' => 'dashboard#index', as: "dashboard"
  end

  namespace :user, path: false do
    get 'dashboard' => 'dashboard#index', as: "dashboard"
  end  

  namespace :admin do
    get 'accept_vendor_request' => 'vendor_requests#accept_vendor_request'
    get 'reject_vendor_request' => 'vendor_requests#reject_vendor_request'
  end

end

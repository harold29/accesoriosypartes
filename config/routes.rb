Rails.application.routes.draw do
  # This line mounts Spree's routes at the root of your application.
  # This means, any requests to URLs such as /products, will go to
  # Spree::ProductsController.
  # If you would like to change where this engine is mounted, simply change the
  # :at option to something different.
  #
  # We ask that you don't use the :as option here, as Spree relies on it being
  # the default of "spree".
  post '/send_contact', to: 'contact#send_contact_email'
  mount Spree::Core::Engine, at: '/'
  # Spree::Core::Engine.add_routes do
  # end
  # Spree::Core::Engine.routes.prepend do
  #   get '/contacto', to: 'welcome#index'
  # end
  # get '/contacto/', to: 'welcome#index'
  # get 'welcome/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

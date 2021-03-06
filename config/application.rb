require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Myapp
  class Application < Rails::Application
    config.autoload_paths << Rails.root.join('lib')
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource(
          '*', 
          headers: :any, 
          methods: [:get, :post, :patch, :put, :delete, :options]
          )
      end
    end
  end
end

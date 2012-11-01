# Run this with 'rackup -p 4567'

require 'bundler'
Bundler.require

require 'sinatra'

require './example_app.rb'

run ExampleApp.new

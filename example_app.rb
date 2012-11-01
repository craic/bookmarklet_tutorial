# example app

# minimal Sinatra application

require 'erb'

$:.unshift File.join(File.dirname(__FILE__))


class ExampleApp < Sinatra::Base

  set :root, File.dirname(__FILE__)

  set :static, true

  get '/' do
    erb :index
  end

end

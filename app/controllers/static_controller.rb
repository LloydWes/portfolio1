class StaticController < ApplicationController
  before_filter :add_www_subdomain
  def a_propos

  end
  def contact
  end
  def mes_realisation

  end

  private
  def add_www_subdomain
    unless /^www/.match(request.host)
      redirect_to("#{request.protocol}x.com#{request.request_uri}",
        :status => 301)
    end
  end
end

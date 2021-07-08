class StaticPagesController < ApplicationController
  def home
    
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)
    
    if session
      @user = session.user
      render 'home'
    else
      render 'login'
    end

  end
end

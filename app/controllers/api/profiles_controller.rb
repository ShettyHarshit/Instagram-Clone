module Api
  class ProfilesController < ApplicationController
    def index
      prods = Profile.all
      render json: prods, status: :ok
    end
    
    def show
      prod = Profile.find(params[:id])
      render json: prod, status: :ok
    end
    
    def create
      prod = Profile.create!(user_params)
      
      if prod.save
        render json: prod, status: :ok  
      else
        render json: prod.errors, status: :ok  
      end
    end
    
    
    def update
      prod = Profile.find(params[:id])
      if prod.update_attributes(profile_params)
        render json: prod, status: :ok  
      end
    end
    
    def destroy
      prod = Profile.find(params[:id])
      prod.destroy
      render json: prod, status: :ok  
    end
    
    private

    def profile_params
      params.permit(:email)
    end

    def user_params
      params.permit(:email, :password, :password_confirmation)
    end
  end
end
module Api
    class UsersController < ApplicationController
        def index
            pokes = User.order('created_at DESC')
            render json: {data:pokes}, status: :ok
        end
        
        def current
            me = current_user
            render json: me, status: :ok          
        end

        def show
            @post = current_user
            
                render json: @post
        end
    end
end
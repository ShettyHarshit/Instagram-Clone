module Api
    class UsersController < ApplicationController
        def index
            pokes = User.order('created_at DESC')
            render json: {data:pokes}, status: :ok
        end
    end
end
module Api
    class PostsController < ApplicationController
        def index
            pokes = Post.order('created_at DESC')
            render json: {data:pokes}, status: :ok
        end
    end
end
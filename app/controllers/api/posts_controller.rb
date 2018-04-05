module Api
    class PostsController < ApplicationController
        def index
            posts = Post.order('created_at DESC')
            likes = Post.second.weighted_score
            render json: posts, status: :ok
        end
        
        def show
            @post = Post.find(params[:id])
            
            if stale?(last_modified: @post.updated_at)
                render json: @post
            end
        end
    end
end
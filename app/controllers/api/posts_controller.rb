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
        
        def upvote 
            @post = Post.find(params[:post_id])
            @post.upvote_by current_user
            likes = @post.weighted_score
            render json: likes, status: :ok
        end  
        
        def downvote
            @post = Post.find(params[:post_id])
            @post.downvote_by current_user
            likes = @post.weighted_score
            render json: likes, status: :ok
        end
    end
end
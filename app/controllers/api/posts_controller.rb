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
        
        def create
            prod = Post.create!(post_params)
            
            if prod.save
                render json: prod, status: :ok  
            else
                render json: prod.errors, status: :ok  
            end
        end
        
        def update
            post = Post.find(params[:id])
            if post.update_attributes(post_params)
                render json: post, status: :ok  
            end
        end
        
        def destroy
            post = Post.find(params[:id])
            post.destroy
            render json: post, status: :ok  
        end
        
        def like 
            @post = Post.find(params[:post_id])
            @post.liked_by current_user
            @post.likes = @post.weighted_score
            render json: @post.likes, status: :ok
        end  
        
        def unlike
            @post = Post.find(params[:post_id])
            @post.unliked_by current_user
            @post.likes = @post.weighted_score
            render json: @post.likes, status: :ok
        end
        
        private
        
        def post_params
            params.permit(:description, :url, :location)
        end
        
    end
end
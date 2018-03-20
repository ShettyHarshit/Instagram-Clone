class PostsController < ApplicationController
  def new
    @post = Post.new       
  end
  
  def index
    posts = Post.all
    render json: {data:posts}, status: :ok
  end
  
  def show
    @post = Post.find(params[:id])
  end
  
  def create
    @post = Post.new(permit_post)
    if @post.save
      redirect_to post_path(@post)
    else
      redirect_to new_post_path
    end
  end
  
  
  private
  
  def permit_post
    params.require(:post).permit(:image, :description)
  end
end
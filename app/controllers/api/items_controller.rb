class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :index_cart, :destroy]
  before_action :authenticate_user!, only: [:update_cart]

  def index
    render json: Item.all.order(created_at: :desc)
  end

  def index_cart
    render json: current_user.cart_items
  end

  def show
    render json: @item 
  end

  def create
    item = Item.create(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors.full_messages.join(',') }, status: 422
    end
  end

  def update_cart
    current_user.cart_items << params[:id].to_i
    current_user.save
  end 


  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: { errors: @item.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @item.destroy
  end

  private
    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :description, :price, :image, :user_id)
    end
end

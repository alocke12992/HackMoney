class Api::CartsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.cart(current_user.added_cart)
  end

  def my_cart
    render json: User.added(current_user.added_cart)
  end

  def update
    current_user.added_cart << params[:id].to_i
    current_user.save
  end
end
end

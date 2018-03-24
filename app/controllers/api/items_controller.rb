class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]


  def index
    render json: Item.all.order(created_at: :desc)
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

  def update
    item = Item.find(params[:id])
    item.name = params[:name]
    item.description = params[:description]
    item.price = params[:price]
    s3 = Aws::S3::Resource.new(region: ENV['AWS_REGION'])
    s3_bucket = ENV['BUCKET']
    file = params[:file]
    begin
      if !file.blank? 
        ext = File.extname(file.tempfile)
        obj = s3.bucket(s3_bucket).object("avatars/#{item.id}#{ext}")
        obj.upload_file(file.tempfile, acl: 'public-read')
        item.image = obj.public_url
      end 
    if item.save
      render json: item
    else
      render json: { errors: @item.errors.full_messages.join(',') }, status: 422
    end
    rescue => e
      render json: { errors: e }, status: 422
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
      params.require(:item).permit(:name, :description, :price)
    end
end

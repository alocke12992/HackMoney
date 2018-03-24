class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :added_cart, Array

  has_many :carts
  has_many :items, through: :carts

  def self.added(ids)
    ids = ids.empty? ? [0] : ids
    Item.where("id IN (?)", ids)
  end

  def self.cart(ids)
    ids = ids.empty? ? [0] : ids
    Item.where("id IN (?)", ids)
  end

end

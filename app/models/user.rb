class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :cart_items, Array

  def self.cart(ids)
    ids = ids.empty? ? [0] : ids
    Item.where("id IN (?)", ids)
  end

    has_many :items

end

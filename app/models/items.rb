class Item < ApplicationRecord
  has_many :carts
  belongs_to :carts
end

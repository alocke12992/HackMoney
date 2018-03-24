class Cart < ApplicationRecord
  has_many :items
  belongs_to :item
  belongs_to :user
end

class AddCartItemsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :cart_items, :text
  end
end

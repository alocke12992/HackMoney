class AddCartToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :cart, :string
  end
end

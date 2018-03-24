class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :price
      t.string :image
      t.belongs_to :user, foreign_key: true
      
      t.timestamps
    end
  end
end

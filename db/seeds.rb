
15.times do 
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Hipster.sentence,
    price: Faker::Number.decimal(2)
  )
end


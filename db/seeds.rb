# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

puts "destorying Airlines"
Airline.destroy_all
puts "Airlines destroyed"

airlines = Airline.create!([
  {
    name: "United Airlines",
    image_url: "https://logos-world.net/wp-content/uploads/2020/11/United-Airlines-Logo-1974-1993.png"
  },
  {
    name: "Qatar Airways",
    image_url: "https://w7.pngwing.com/pngs/235/965/png-transparent-qatar-airways-logo-airline-oryx-others-text-logo-qatar-airways-thumbnail.png"
  },
  {
    name: "Singapore Airlines",
    image_url: "https://e7.pngegg.com/pngimages/856/45/png-clipart-singapore-airlines-logo-singapore-airlines-flight-greyhound-lines-airline-angle-text.png"
  },
  {
    name: "Cathay Pacific Airways",
    image_url: "https://www.seekpng.com/png/full/751-7511536_cathay-pacific-logo-png-transparent.png"
  },
  {
    name: "Emirates",
    image_url: "https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo.png"
  },
  {
    name: "Hainan Airlines",
    image_url: "https://logos-download.com/wp-content/uploads/2016/02/Hainan_Airlines_logo.png"
  },
   
])

reviews = Review.create!([
  {
    title: 'Great airline',
    description: 'I had a lovely time',
    score: 5,
    airline: airlines.first
  },
  {
    title: 'Bad airline',
    description: 'I had a bad time',
    score: 1,
    airline: airlines.first
  }
])
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
#   Seed out DB so we have stuff to start with

post_one = Post.create({title: "Post one", body: "I am body for post one"})
post_two = Post.create({title: "Post two", body: "I am body for post two"})

post_one.comments.create({body: "I am a comment for post one"})
post_two.comments.create({body: "I am a comment for post two"})


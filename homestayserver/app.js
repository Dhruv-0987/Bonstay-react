const express = require("express");
const cors = require('cors');
const { application } = require("express");

const app = express();
app.use(cors({
  origin: 'http://localhost:3002',
  optionsSuccessStatus: 200,
}))
const users = [
  {
    "id": 1,
    "name": "Maria",
    "address": "Bangalore,Karnataka",
    "email": "maria@gmail.com",
    "phoneNo": 1234567890,
    "password": "maria123456"
  },
  {
    "name": "Setna",
    "address": "Bangalore",
    "phoneNo": "1234567890",
    "email": "setna@gmail.com",
    "password": "Setna@123",
    "id": 2
  },
  {
    "name": "Sera",
    "address": "bangalore",
    "phoneNo": "1234567890",
    "email": "sera@gmail.com",
    "password": "Sera@1234",
    "id": 3
  },
  {
    "name": "Daisy",
    "address": "Bangalore",
    "phoneNo": "1234567890",
    "email": "daisy@gmail.com",
    "password": "Daisy@123",
    "id": 4
  }
]

const hotels = [
  {
    "id": 1,
    "hotelName": "Paradise Stay",
    "city": "Bangalore",
    "description": "A home to relax at the 'city' peek with all the facilities near you",
    "amenities": "Different Cuisine Food, Swimming Pool, Self Cooking Station",
    "phoneNo": 9090909090,
    "address": "120/1C, Bangalore, Karnataka",
    "imageUrl": "2.jpg",
    "reviews": [
      "Good Accomodation",
      "Best place to relax with friends and family",
      "The best place to chill with friends. ",
      "The best place I ever visited."
    ]
  },
  {
    "id": 2,
    "hotelName": "Hill Palace",
    "city": "Kochi",
    "description": "A cool place to relax at Lake side",
    "amenities": "Homely Food, Sea Food, Children's Park, Boating",
    "phoneNo": 9191919191,
    "address": "90/1A, Kochi, Kerala",
    "imageUrl": "3.jpg",
    "reviews": [
      "Must visit place. The cuisine available here is so amazing.",
      "My favorite place to relax on my vacations"
    ]
  },
  {
    "id": 3,
    "hotelName": "Monsoon Stay",
    "city": "Chennai",
    "description": "A luxurious but affordable stay as in your home",
    "amenities": "24 hr Homely Food, Security, Children's Park",
    "phoneNo": 9292929292,
    "address": "100/1A, Chennai, Tamil Nadu",
    "imageUrl": "4.jpg",
    "reviews": []
  },
  {
    "id": 4,
    "hotelName": "Galaxy Paradise",
    "city": "Mumbai",
    "description": "An affordable family stay spot at the 'City' heart",
    "amenities": "24 hr Homely Food, Swimming Pool, Security",
    "phoneNo": 9393939393,
    "address": "190/1B, Mumbai, Maharastra",
    "imageUrl": "5.jpg",
    "reviews": []
  }
]

app.post('/registeruser', (req, res) => {
  console.log(req.query.name, req.method);
  users.push({

    id: users.length + 1,
    name: req.query.name,
    address: req.query.address,
    phoneNo: req.query.phoneno,
    email: req.query.email,
    password: req.query.password
  })
  res.json({
    total: users.length
  });
})


app.listen(4000, () => {
  console.log("server started");
})
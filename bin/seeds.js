require('dotenv').config();

const mongoose = require('mongoose');
const Customer = require('../models/Customer');
const Item = require('../models/Item');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');

(async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
    });
    console.log(
      `Connected to Mongo! Database name: "${connection.connections[0].db.s.databaseName}"`,
    );
    // connection.connections[0].db.dropDatabase();
  } catch (err) {
    console.log('Error connecting to Mongo database.', err);
  }
})();

const customers = [
  {
    CustomerID: 1,
    Name: 'Olivia Kathleen',
  },
  {
    CustomerID: 2,
    Name: 'Liam Patrick',
  },
  {
    CustomerID: 3,
    Name: 'Charlotte Rose',
  },
  {
    CustomerID: 4,
    Name: 'Elijah Burke',
  },
  {
    CustomerID: 5,
    Name: 'Ayesha Ameer',
  },
  {
    CustomerID: 6,
    Name: 'Eva Louis',
  },
];

// const items = [
//   {
//     ItemID: 1,
//     Name: 'Chicken Tenders',
//     Price: 3.5,
//   },
//   {
//     ItemID: 2,
//     Name: 'Chicken Tenders w/ Fries',
//     Price: 4.99,
//   },
//   {
//     ItemID: 3,
//     Name: 'Chicken Tenders w/ Onion',
//     Price: 5.99,
//   },
//   {
//     ItemID: 4,
//     Name: 'Grilled Chesse Sandwich',
//     Price: 2.5,
//   },
//   {
//     ItemID: 5,
//     Name: 'Grilled Chesse Sandwich w/ Fries',
//     Price: 3.99,
//   },
//   {
//     ItemID: 6,
//     Name: 'Grilled Chesse Sandwich w/ Onion',
//     Price: 4.99,
//   },
//   {
//     ItemID: 7,
//     Name: 'Lettuce and Tomato Burger',
//     Price: 1.99,
//   },
//   {
//     ItemID: 8,
//     Name: 'Soup',
//     Price: 2.5,
//   },
//   {
//     ItemID: 9,
//     Name: 'Onion Rings',
//     Price: 2.99,
//   },
//   {
//     ItemID: 10,
//     Name: 'Fries',
//     Price: 1.99,
//   },
//   {
//     ItemID: 11,
//     Name: 'Sweet Potato Fries',
//     Price: 2.49,
//   },
//   {
//     ItemID: 12,
//     Name: 'Sweet Tea',
//     Price: 1.79,
//   },
//   {
//     ItemID: 13,
//     Name: 'Bottle Water',
//     Price: 1.0,
//   },
//   {
//     ItemID: 14,
//     Name: 'Canned Drinks',
//     Price: 1.0,
//   },
// ];

Customer.create(customers)
  .then(customer => {
    console.log('inserted item ', customer);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });

// const events = [
//   {
//     schedule: 2019 - 12 - 11,
//     description: 'El mejor bar en el barrio del Poblenou',
//     price: 10,
//     durationMins: 120,
//   },
//   {
//     schedule: 2019 - 12 - 10,
//     description: 'El mediocre bar en el barrio del Poblenou',
//     price: 1,
//     durationMins: 20,
//   },
//   {
//     schedule: 2019 - 12 - 12,
//     description: 'El mejor bar en el barrio de la Mina',
//     price: 10,
//     durationMins: 20,
//   },
// ];

// const users = [
//   {
//     username: 'joeDoe',
//     email: 'joeDoe@gmail.com',
//     hashedPassword: 'abcd',
//     roles: 'establishment',
//     establishmentName: 'La Ovella Negra',
//   },
//   {
//     username: 'Yustin',
//     email: 'yustin@gmail.com',
//     hashedPassword: '1234',
//     bandName: 'Yonas Bros',
//   },
//   {
//     username: 'maricarmen',
//     email: 'maricarmen@gmail.com',
//     hashedPassword: 'jerezana',
//   },
// ];

// const establishments = [
//   {
//     description: 'Bar de Copas centrico....',
//     website: 'machinebar.com',
//     instagramProfile: 'machinbarig.com',
//     facebookProfile: 'machinebarfb.com',
//     street: 'carrer pujades 21',
//     city: 'barcelona',
//     zip: '08022',
//     capacity: 100,
//   },
// ];

// const bands = [
//   {
//     description: 'Banda de genero punk',
//     website: 'punkies.com',
//     instagramProfile: 'punkisig.com',
//     facebookProfile: 'punkiesfb.com',
//     bandMembers: [{ artistName: 'pepe' }, { artistInstrument: 'juan' }],
//   },
// ];

// db.bands
//   .drop()
//   .then(() => {
//     console.log("deleted DB bands");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// events
//   .drop()
//   .then(() => {
//     console.log("deleted DB events");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// establishments.collection
//   .drop()
//   .then(() => {
//     console.log("deleted DB establishments");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// users.collection
//   .drop()
//   .then(() => {
//     console.log("deleted DB users");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Event.create(events)
//   .then(event => {
//     console.log('inserted event ', event);
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(err);
//     mongoose.connection.close();
//   });

// User.create(users)
//   .then(user => {
//     console.log('inserted user ', user);
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(err);
//     mongoose.connection.close();
//   });

// Establishment.create(establishments)
//   .then(establishment => {
//     console.log('inserted establishment ', establishment);
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(err);
//     mongoose.connection.close();
//   });

// Band.create(bands)
//   .then(band => {
//     console.log('inserted band ', band);
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.log(err);
//     mongoose.connection.close();
//   });

// USE db
// use keyin-class;
// Response:
// switched to db keyin-class

// Creates collection
db.createCollection('books');
// Response:
// { ok: 1 }

db.books.insertOne([])
// Response:
// {
//     acknowledged: true,
//     insertedId: ObjectId('691b19627c266830846e7489')
//   }

db.books.insertOne({ 
    title: "The Great Gatsby", 
    author: "F. Scott Fitzgerald", 
    genre: "Fiction", 
    publishedYear: 1925 
  });
// Response:
//   {
//     acknowledged: true,
//     insertedId: ObjectId('691b1a0f7c266830846e748a')
//   }

db.books.insertMany([
    {
      title: "To kill a Mockingbird", 
        author: "Marper Lee", 
        genre: "Fiction", 
        publishedYear: 1960 
    },
    {
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949
    }
  ]);
// Response:
// {
//     acknowledged: true,
//     insertedIds: {
//       '0': ObjectId('691b1b2f7c266830846e748b'),
//       '1': ObjectId('691b1b2f7c266830846e748c')
//     }
//   }

db.books.insertMany([
    {
      title: "Matchet",
      author: "Brian Paulson",
      publishedYear: 2001,
      genre: "Adventure"
    }
  ]);
// Response:
// {
//     acknowledged: true,
//     insertedIds: {
//       '0': ObjectId('691b1c537c266830846e748d')
//     }
//   }

db.books.find({}, {});
// Response:
// {
//     _id: ObjectId('691b1a0f7c266830846e748a'),
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     genre: 'Fiction',
//     publishedYear: 1925
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748b'),
//     title: 'To kill a Mockingbird',
//     author: 'Marper Lee',
//     genre: 'Fiction',
//     publishedYear: 1960
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748c'),
//     title: '1984',
//     author: 'George Orwell',
//     publishedYear: 1949
//   }
//   {
//     _id: ObjectId('691b1c537c266830846e748d'),
//     title: 'Matchet',
//     publishedYear: 2001,
//     genre: 'Adventure',
//     authour: 'Brian Paulson'
//   }

db.books.find({}, {title: 1});
// Response:
// {
//     _id: ObjectId('691b1a0f7c266830846e748a'),
//     title: 'The Great Gatsby'
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748b'),
//     title: 'To kill a Mockingbird'
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748c'),
//     title: '1984'
//   }
//   {
//     _id: ObjectId('691b1c537c266830846e748d'),
//     title: 'Matchet'
//   }

db.books.find({}, {title: 2});
// Response:
// {
//     _id: ObjectId('691b1a0f7c266830846e748a'),
//     title: 'The Great Gatsby'
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748b'),
//     title: 'To kill a Mockingbird'
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748c'),
//     title: '1984'
//   }
//   {
//     _id: ObjectId('691b1c537c266830846e748d'),
//     title: 'Matchet'
//   }

db.books.find({}, {title: 1, _id: 0});
// Response:
// {
//     title: 'The Great Gatsby'
//   }
//   {
//     title: 'To kill a Mockingbird'
//   }
//   {
//     title: '1984'
//   }
//   {
//     title: 'Matchet'
//   }

db.books.find({}, {title: 1, _id: false});
// Response:
// {
//     title: 'The Great Gatsby'
//   }
//   {
//     title: 'To kill a Mockingbird'
//   }
//   {
//     title: '1984'
//   }
//   {
//     title: 'Matchet'
//   }

db.books.find({}, {genre: false});
// Response:
// {
//     _id: ObjectId('691b1a0f7c266830846e748a'),
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     publishedYear: 1925
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748b'),
//     title: 'To kill a Mockingbird',
//     author: 'Marper Lee',
//     publishedYear: 1960
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748c'),
//     title: '1984',
//     author: 'George Orwell',
//     publishedYear: 1949
//   }
//   {
//     _id: ObjectId('691b1c537c266830846e748d'),
//     title: 'Matchet',
//     publishedYear: 2001,
//     authour: 'Brian Paulson'
//   }

db.books.find({}, {author: true });
// Response:
// {
//     _id: ObjectId('691b1a0f7c266830846e748a'),
//     author: 'F. Scott Fitzgerald'
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748b'),
//     author: 'Marper Lee'
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748c'),
//     author: 'George Orwell'
//   }
//   {
//     _id: ObjectId('691b1c537c266830846e748d'),
//     title: 'Matchet'
//   }

db.books.find(
    { // Query
      publishedYear: {
        $gt: 1950
      }
    },
    { //Projection
      author: true, 
    }
  );
// Response:
//   {
//     _id: ObjectId('691b1b2f7c266830846e748b'),
//     author: 'Marper Lee'
//   }
//   {
//     _id: ObjectId('691b1c537c266830846e748d')
//   }

db.books.find(
    { // Query
      publishedYear: {
        $gt: 1950
      }
    }
  );
  // Response:
//   {
//     _id: ObjectId('691b1b2f7c266830846e748b'),
//     title: 'To kill a Mockingbird',
//     author: 'Marper Lee',
//     genre: 'Fiction',
//     publishedYear: 1960
//   }
//   {
//     _id: ObjectId('691b1c537c266830846e748d'),
//     title: 'Matchet',
//     publishedYear: 2001,
//     genre: 'Adventure',
//     authour: 'Brian Paulson'
//   }

db.books.find(
    { // Query
      publishedYear: {
        $gt: 1950
      }
    },
    { //Projection
      author: true, 
    }
  );
  // Response:
//   {
//     _id: ObjectId('691b1b2f7c266830846e748b'),
//     author: 'Marper Lee'
//   }
//   {
//     _id: ObjectId('691b1c537c266830846e748d')
//   }

db.books.find(
    { // Query
      publishedYear: {
        $gt: 1950
      }
    },
    { //Projection
      title: true,
      author: true, 
    }
  );
    // Response:
    // {
    //     _id: ObjectId('691b1b2f7c266830846e748b'),
    //     title: 'To kill a Mockingbird',
    //     author: 'Marper Lee'
    //   }
    //   {
    //     _id: ObjectId('691b1c537c266830846e748d'),
    //     title: 'Matchet'
    //   }

db.books.updateOne(
        {
          title: 'Matchet'
        },
        {
          $rename: {}
        }
      );
// Response
// {
//     acknowledged: true,
//     insertedId: null,
//     matchedCount: 1,
//     modifiedCount: 0,
//     upsertedCount: 0
//   }

db.books.updateOne(
    {
      title: 'Matchet'
    },
    {
      $rename: {
        'authour': 'author'
      }
    }
  );

// Response
// {
//     acknowledged: true,
//     insertedId: null,
//     matchedCount: 1,
//     modifiedCount: 1,
//     upsertedCount: 0
//   }

db.books.updateMany(
    {},
    {
      $rename: {
        'author': 'authour'
      }
    }
  );
// Response
// {
//     acknowledged: true,
//     insertedId: null,
//     matchedCount: 4,
//     modifiedCount: 4,
//     upsertedCount: 0
//   }

db.books.updateMany(
    {},
    {
      $rename: {
        'authour': 'author'
      }
    }
  );
// Response
// {
//     acknowledged: true,
//     insertedId: null,
//     matchedCount: 4,
//     modifiedCount: 4,
//     upsertedCount: 0
//   }

db.books.find(
    {
      genre: {
        $eq: "Fiction"
      }
    }
  );
  // Response
//   {
//     _id: ObjectId('691b1a0f7c266830846e748a'),
//     title: 'The Great Gatsby',
//     genre: 'Fiction',
//     publishedYear: 1925,
//     author: 'F. Scott Fitzgerald'
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748b'),
//     title: 'To kill a Mockingbird',
//     genre: 'Fiction',
//     publishedYear: 1960,
//     author: 'Marper Lee'
//   }

db.books.find(
    {
        genre: "Fiction"
    }
);
// Response
//   {
//     _id: ObjectId('691b1a0f7c266830846e748a'),
//     title: 'The Great Gatsby',
//     genre: 'Fiction',
//     publishedYear: 1925,
//     author: 'F. Scott Fitzgerald'
//   }
//   {
//     _id: ObjectId('691b1b2f7c266830846e748b'),
//     title: 'To kill a Mockingbird',
//     genre: 'Fiction',
//     publishedYear: 1960,
//     author: 'Marper Lee'
//   }
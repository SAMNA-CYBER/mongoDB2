dbexample> db.staffs.insertMany([
    ...   {
    ...     "_id": ObjectId("650d0d5a9a15c1c1f9a8a001"),
    ...     "name": "John Doe",
    ...     "age": 25,
    ...     "hobbies": ["reading", "swimming", "coding", "traveling"]
    ...   },
    ...   {
    ...     "_id": ObjectId("650d0d5a9a15c1c1f9a8a002"),
    ...     "name": "Jane Smith",
    ...     "age": 30,
    ...     "hobbies": ["cooking", "yoga", "gardening"]
    ...   },
    ...   {
    ...     "_id": ObjectId("650d0d5a9a15c1c1f9a8a003"),
    ...     "name": "Alice Johnson",
    ...     "age": 22,
    ...     "hobbies": ["painting", "running"]
    ...   }
    ... ]
    ... )
    {
      acknowledged: true,
      insertedIds: {
        '0': ObjectId('650d0d5a9a15c1c1f9a8a001'),
        '1': ObjectId('650d0d5a9a15c1c1f9a8a002'),
        '2': ObjectId('650d0d5a9a15c1c1f9a8a003')
      }
    }
    dbexample> db.staffs.updateOne({name :"John Doe"} , { $push : {hobbies : ["play", "dance"]} } )
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }
    dbexample> db.staffs.find(name :  "John Doe")
    Uncaught:
    SyntaxError: Unexpected token, expected "," (1:20)
    
    > 1 | db.staffs.find(name :  "John Doe")
        |                     ^
      2 |
    
    dbexample> db.staffs.find()
    [
      {
        _id: ObjectId('650d0d5a9a15c1c1f9a8a001'),
        name: 'John Doe',
        age: 25,
        hobbies: [
          'reading',
          'swimming',
          'coding',
          'traveling',
          [ 'play', 'dance' ]
        ]
      },
      {
        _id: ObjectId('650d0d5a9a15c1c1f9a8a002'),
        name: 'Jane Smith',
        age: 30,
        hobbies: [ 'cooking', 'yoga', 'gardening' ]
      },
      {
        _id: ObjectId('650d0d5a9a15c1c1f9a8a003'),
        name: 'Alice Johnson',
        age: 22,
        hobbies: [ 'painting', 'running' ]
      }
    ]
    dbexample> db.staffs.updateOne({name :"John Doe"} , { $push : {hobbies : "play", "dance"} } )
    Uncaught:
    SyntaxError: Unexpected token (1:77)
    
    > 1 | db.staffs.updateOne({name :"John Doe"} , { $push : {hobbies : "play", "dance"} } )
        |                                                                              ^
      2 |
    
    dbexample> db.staffs.updateOne({name :"John Doe"} , { $push : {hobbies : {"play", "dance"}} } )
    Uncaught:
    SyntaxError: Unexpected token (1:69)
    
    > 1 | db.staffs.updateOne({name :"John Doe"} , { $push : {hobbies : {"play", "dance"}} } )
        |                                                                      ^
      2 |
    
    dbexample> db.staffs.updateOne({name :"John Doe"} , { $push : {hobbies : {"play"}} } )
    Uncaught:
    SyntaxError: Unexpected token (1:69)
    
    > 1 | db.staffs.updateOne({name :"John Doe"} , { $push : {hobbies : {"play"}} } )
        |                                                                      ^
      2 |
    
    dbexample> db.staffs.updateOne({name :"John Doe"} , { $push : {hobbies : "play"} } )
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }
    dbexample> db.staffs.updateOne({name : 'Alice Johnson'}, {$push : {hobbies : {$each : {"dance" ,"sing"}}})
    Uncaught:
    SyntaxError: Unexpected token (1:84)
    
    > 1 | db.staffs.updateOne({name : 'Alice Johnson'}, {$push : {hobbies : {$each : {"dance" ,"sing"}}})
        |                                                                                     ^
      2 |
    
    dbexample> db.staffs.updateOne({name : 'Alice Johnson'}, {$push : {hobbies : {$each : ["dance" ,"sing"]}})
    Uncaught:
    SyntaxError: Unexpected token, expected "," (1:94)
    
    > 1 | db.staffs.updateOne({name : 'Alice Johnson'}, {$push : {hobbies : {$each : ["dance" ,"sing"]}})
        |                                                                                               ^
      2 |
    
    dbexample> db.staffs.updateOne({name : 'Alice Johnson'}, {$push : {hobbies : {$each : ["dance" ,"sing"]}}})
    {
      acknowledged: true,
      insertedId: null,
      matchedCount: 1,
      modifiedCount: 1,
      upsertedCount: 0
    }
    dbexample> db.staffs.find({name : "Alice Johnson"})
    [
      {
        _id: ObjectId('650d0d5a9a15c1c1f9a8a003'),
        name: 'Alice Johnson',
        age: 22,
        hobbies: [ 'painting', 'running', 'dance', 'sing' ]
      }
    ]
    dbexample>
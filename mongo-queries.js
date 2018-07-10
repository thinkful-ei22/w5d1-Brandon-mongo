'use strict';

let conn = new Mongo();
let db = conn.getDB('noteful');

// Write a MongoDB query to display all the documents in the collection notes.

// let notes = db.notes.find();

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to display all the documents in the collection notes and format the results to be 'pretty'.

// let prettyNotes = db.notes.find().pretty();

// while ( prettyNotes.hasNext() ){
//   printjson(prettyNotes.next());
// }

// Write a MongoDB query to display the fields title and content for all the documents in the collection notes.

// let notes = db.notes.find();

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to display the fields title and content but exclude the field _id for all the documents in the collection notes.

// let notes = db.notes.find({}, {title: 1, content: 1});

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to display only the title field for all the documents in the collection notes and sort the results by _id in descending order.

// let notes = db.notes.find({}, {title: 1}).sort({_id: -1});

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }


// Write a MongoDB query to display all the documents from the collection notes which contain the title '5 life lessons learned from cats'.

// let notes = db.notes.find({title: '5 life lessons learned from cats'});

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to display the first 5 documents from the collection notes.

// let notes = db.notes.find().sort({_id: 1}).limit(5);

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }


// Write a MongoDB query to display the next 5 documents from the collection notes after skipping the first 5.

// let notes = db.notes.find().sort({_id: 1}).skip(5).limit(5);

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }
// Write a MongoDB query to display the total number of documents in the collection notes.

// let noteCount = db.notes.find().count();

// printjson(noteCount);
// Write a MongoDB query to display the documents from the collection notes which have an _id that is greater than "000000000000000000000007".

// let notes = db.notes.find({_id: {$gt: 7}});

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to display the documents from the collection notes which have an _id which is greater than or equal to "000000000000000000000009" but less than or equal to "000000000000000000000017".

// let notes = db.notes.find({_id: {$gte:9, $lte: 17}});

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to display the documents from the collection notes which have an _id which is less than or equal to "000000000000000000000007".

// let notes = db.notes.find({_id: { $lte: 7}});

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to display only one document from the collection notes.
// let note = db.notes.findOne();
// printjson(note);

// Write a MongoDB query to display only the title of one document from the collection notes (_id can be included).

// let note = db.notes.findOne({}, {title: 1});
// printjson(note);

// Write a MongoDB query to display only the title of one document from the collection notes (_id excluded).

// let note = db.notes.findOne({}, {_id: 0, title: 1});
// printjson(note);
// Write a MongoDB query to insert one document into the collection notes. The title and content fields can be whatever you like.

// let newNote = db.notes.insert({
//   title: 'New Title', content: 'new content'
// });

// let notes = db.notes.find();

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to insert two note documents into the collection notes. The title and content fields can be whatever you like.
// db.notes.insertMany([{
//   title: 'New Title1', content: 'new content1'
// }, {title: 'New Title2', content: 'new content2'}]);

// let notes = db.notes.find();

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }
// Write a MongoDB query to modify the title and content fields of the document from the collection notes with _id "000000000000000000000003". Change the title and content to be whatever you like.

// let objId = db.notes.findOne({_id: 3})._id;

// db.notes.updateOne(
//   {_id: objId},
//   { $set: {title: 'Updated Content', content: 'Updated Content'}}
// );


// let note = db.notes.findOne({_id: objId});

//   printjson(note);

// Write a MongoDB query to modify only the title field of the document from the collection notes with _id "000000000000000000000007". The content field should remain unchanged.

// let objId = db.notes.findOne({_id: 7})._id;

// db.notes.updateOne(
//   {_id: objId},
//   { $set: {title: 'Updated Content'}}
// );


// let note = db.notes.findOne({_id: objId});

//   printjson(note);

// Write a MongoDB query to modify the title and content fields of all the documents in the collection notes that have an _id field greater than "000000000000000000000014".


// db.notes.updateMany(
//   {_id: {$gt: 14}},
//   { $set: {title: 'Updated Title', content: 'updated content'}}
// );


// let notes = db.notes.find({_id: { $gt: 14}});

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to remove only the title field from the document in the collection notes with _id "000000000000000000000008".

// db.notes.update({_id: 8}, {$unset: {title: 1}});

// let note = db.notes.find({_id: 8});


//   printjson(note);



// Write a MongoDB query to remove the content fields from all documents in the collection notes with _id less than or equal to "000000000000000000000006".

// db.notes.updateMany({_id: {$lte: 6}}, {$unset: {content: ''}});


// let notes = db.notes.find({_id: {$lte :6}});

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to remove the title fields from all documents in the collection notes with _id less than or equal to "000000000000000000000003".

// db.notes.updateMany({_id: {$lte: 6}}, {$unset: {content: ''}});


// let notes = db.notes.find({_id: {$lte :6}});

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to remove the document from the collection notes that has an _id "000000000000000000000017".

// db.notes.remove({_id: 17});


// let noteCount = db.notes.find({_id: 17}).count();


//   printjson(noteCount);


// Write a MongoDB query to remove the documents from the collection notes that have an _id which is not less than "000000000000000000000018".

// db.notes.remove({_id: { $gte: 18}});


// let noteCount = db.notes.find({_id: { $gte: 18}}).count();


//   printjson(noteCount);

// Write a MongoDB query to remove the documents from the collection notes that have an _id which is greater than or equal to "000000000000000000000013" and contain the string 'dogs' in the title.

// db.notes.remove({_id: { $gte: 13}, title: {$regex: '/dogs/'}} );


//  let noteCount = db.notes.find({_id: { $gte: 13}, title: {$regex: '/dogs/'}}).count();


//   printjson(noteCount);

// Write a MongoDB query to display all the documents from the collection notes which do not have a title field.


// let notes = db.notes.find({}, {title: 0});

// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

// Write a MongoDB query to remove all the documents from the collection notes which contain the string 'cat' in the title but not the string 'the'.

// db.notes.remove({ title: {$regex: '/cat/'}}, {title: {$not: '/the/'}} );


//  let noteCount = db.notes.find({title: {$regex: '/cat/'}}, {title: {$not: '/the'}}).count();


//   printjson(noteCount);

// Write a MongoDB query to display all the documents from the collection notes that have a title field which does not contain the string 'dogs' and does contain a title field.





//  let notes = db.notes.find({},{title: 1}, {title: {$not: '/dogs/'}});


// while ( notes.hasNext() ){
//   printjson(notes.next());
// }

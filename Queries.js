/*FIND Queries (It retruns array)=================== */


db.find({ _id: "123abcc098is" });

db.find({ name: "Ayush" });

//here first one is projection and second one is used to select data with 0 & 1.
db.find({ age: 25 }, { title: 0, books: 1 });

db.find({ author: "Ruskin bond" }, { books: 1, age: 1, location: 1 })

db.find({ name: "Ayush Panday" }, { title: 1, date: 1, data: 0 })


// And , or , nin(not in), in 

db.find({ $and: [{ name: "Github" }, { title: "MongoDb" }] });

db.find({ $and: [{ title: "DATABASE" }, { content: "Queries" }] });

db.find({ $or: [{ name: "Github" }, { data: "queries" }] });

db.find({ $or: [{ book: "Discovery of India" }, { author: "Jawahar lal nehru" }] });

db.find({ name: { $in: ["Gandhi", "Subhash bose"] } });

db.find({ code: { $nin: ["Javascript", "PHP"] } });

db.find({ status: { $nin: ["Pending", "Rejected"] } });


//not equals and equals

db.find({ age: { $eq: 20 } });

db.find({ name: { $eq: "Github" } })

db.find({ name: { $ne: "Code" } });

db.find({ data: { $ne: "Rejcted!!" } });


//greater than(gt) and less than(lt);

db.find({ age: { $gt: 20 } });

db.find({ data: { $gt: 100 } });

db.find({ age: { $lt: 25 } });

db.find({ age: { $lt: 40 } })


//gte(gt and equals) and lte(less then and equals)

db.find({ age: { $gte: 21 } });

db.find({ books: { $gte: 100 } });

db.find({ rupees: { $lte: 250 } });

db.find({ age: { $lte: 40 } });




//sort and limit

db.find().skip(1);

db.find().skip(2).limit(5);

db.find({ name: "Ayush" }).skip(4).limit(5)


//sort

db.find().sort({ name: 1 });

db.find().sort({ age: -1 });

db.find().sort({ age: -1 }).limit(5);



/*FINDONE (it returns object)==================*/

db.findOne({name:"MongoDB"});

db.findOne({$and:[{name:"Queries"},{data:"MongoDB"}]});

db.findOne({_id:id})



/*INSERT QUERIES============================= */

db.insertOne({ name: "Github" })


db.insertOne({
    name: "Ayush panday",
    age: 20,
    coding: "Javascript",
    data: "MongoDB queries"
})


db.insertOne({
    name: "Parth",
    age: 20,
    address: { street: "Main road" },
    codes: ["JS", "PHP", "Css"],
})


db.insertOne({ profile: "Github" });



db.insertMany([
{ name: "AYUSH", age: 20, Maths: "A", Status: "PASS" },
{ name: "Vikash", age: 25, Maths: "A", Status: "PASS" },
{ name: "Satyam", age: 23, Maths: "C", Status: "FAIL" }
])


db.insertMany([
    {_id : 1,name : "Alex",age : 16,marks : { physics : 90, chemistry : 85, mathematics : 59 }},
    {_id : 2,name : "Albert",age : 17, marks : { physics : 92, chemistry : 87, mathematics : 88}},
    {_id : 3,name : "Bob",age : 16, marks : { physics : 88, chemistry : 81, mathematics : 66}},
    {_id : 4,name : "John",age : 17, marks : { physics : 78, chemistry : 55, mathematics : 63}}
])



/*UPDATEONE And UPDATEMANY=======================*/

db.updateOne({})
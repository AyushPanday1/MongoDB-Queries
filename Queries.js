/*INSERT QUERIES============================= */

db.model.insertOne({ name: "Github" })


db.model.insertOne({
    name: "Ayush panday",
    age: 20,
    coding: "Javascript",
    data: "MongoDB queries"
})


db.model.insertOne({
    name: "Parth",
    age: 20,
    address: { street: "Main road" },
    codes: ["JS", "PHP", "Css"],
})


db.model.insertOne({ profile: "Github" });


db.model.insertMany([
    { name: "AYUSH", age: 20, Maths: "A", Status: "PASS" },
    { name: "Vikash", age: 25, Maths: "A", Status: "PASS" },
    { name: "Satyam", age: 23, Maths: "C", Status: "FAIL" }
])

db.model.insertMany([
    { _id: 1, name: "Alex", age: 16, marks: { physics: 90, chemistry: 85, mathematics: 59 } },
    { _id: 2, name: "Albert", age: 17, marks: { physics: 92, chemistry: 87, mathematics: 88 } },
    { _id: 3, name: "Bob", age: 16, marks: { physics: 88, chemistry: 81, mathematics: 66 } },
    { _id: 4, name: "John", age: 17, marks: { physics: 78, chemistry: 55, mathematics: 63 } }
])


/*FIND Queries (It retruns array)=================== */


db.model.find({ name: "Ayush" });

db.model.find({ _id: id });


//here first one is projection and second one is used to select data with 0(Not show) & 1(Show)

db.model.find({ age: 25 }, { title: 0, books: 1 });

db.model.find({ author: "Ruskin bond" }, { books: 1, age: 1, location: 1 })

db.model.find({ name: "Ayush Panday" }, { title: 1, date: 1, data: 0 })


// And , or , nin(not in), in 

db.model.find({ $and: [{ name: "Github" }, { title: "MongoDb" }] });

db.model.find({ $and: [{ title: "DATABASE" }, { content: "Queries" }] });


db.model.find({ $or: [{ name: "Github" }, { data: "queries" }] });

db.model.find({ $or: [{ book: "Discovery of India" }, { author: "Jawahar lal nehru" }] });


db.model.find({ name: { $in: ["Gandhi", "Subhash bose"] } });


db.model.find({ code: { $nin: ["Javascript", "PHP"] } });

db.model.find({ status: { $nin: ["Pending", "Rejected"] } });


//not equals and equals

db.model.find({ age: { $eq: 20 } });

db.model.find({ name: { $eq: "Github" } })


db.model.find({ name: { $ne: "Code" } });

db.model.find({ data: { $ne: "Rejcted!!" } });


//greater than(gt) and less than(lt);

db.model.find({ age: { $gt: 20 } });

db.model.find({ data: { $gt: 100 } });


db.model.find({ age: { $lt: 25 } });

db.model.find({ age: { $lt: 40 } })


//gte(gt and equals) and lte(less then and equals)

db.model.find({ age: { $gte: 21 } });

db.model.find({ books: { $gte: 100 } });


db.model.find({ rupees: { $lte: 250 } });

db.model.find({ age: { $lte: 40 } });


db.model.find({ name: "Ayush", age: { $gte: 19, $lte: 23 } });


//skip and limit

db.model.find().skip(1);

db.model.find().skip(2).limit(5);

db.model.find({ name: "Ayush" }).skip(4).limit(5)


//sort

db.model.find().sort({ name: 1 });

db.model.find().sort({ age: -1 });

db.model.find().sort({ age: -1 }).limit(5);


//exists, type and size

db.model.find({ title: { $exists: true } });

db.model.find({ price: { $type: "string" } })

//It is used for any attribute who have array in its value and to return only thpse values whose array length is size
db.model.find({ subjects: { $size: 2 } })


/*FINDONE (it returns first object that matches the query)==================*/

db.model.findOne({ name: "MongoDB" });

db.model.findOne({ $and: [{ name: "Queries" }, { data: "MongoDB" }] });

db.model.findOne({ _id: id })

db.model.findById({ _id: id })

/**FINDONEANDUPDATE , FINDONEANDDELETE and FINDONEANDREPLACE */

db.model.findOneAndUpdate({ book: "CODE" }, { $inc: { price: 150 } })

db.findOneAndDelete({ product: "Pen" })

db.model.findOneAndReplace({ age: 17 }, { name: "Mihir", age: 17 })


/*UPDATE, UPDATEONE And UPDATEMANY=======================*/

db.model.update({ name: "avi" }, { $set: { name: "Anurag" } })

db.model.updateOne({ _id: id }, { $set: { name: "Ayush Panday" } });

db.model.updateOne({ name: "Github" }, { $set: { language: "Js" } });

db.model.updateOne({ product: "Laptop" }, { $unset: { price: "" } })


//increase (inc) and rename
db.model.updateOne({ _id: id }, { $inc: { price: 250 } });

db.model.updateOne({ _id: id }, { $inc: { price: -100 } })

db.model.updateOne({ _id: id }, { $rename: { enam: "name" } });

//pull and push

db.model.updateOne({ _id: id }, { $push: { language: "python" } });

db.model.updateOne({ _id: id }, { $pull: { language: "java" } });


{/*NOTE: Use upsert when if there is no object matching then it will create that object in db*/ }

db.model.updateOne({ name: "Ayush panday" }, { $set: { books: 20 } }, { upsert: true });

db.model.updateMany(
    { Book: "Networking" },
    { $set: { price: 999 } },
    { upsert: true }
)

db.updateMany(
    { product: "Book" },
    { $set: { price: 300 } },
    { upsert: true }
)



/**DELETE METHODS=========================== */

db.model.deleteOne({ _id: 1 });

db.model.deleteOne({ author: "Kumar sharma" });

//delete all documents

db.model.deleteMany({})

db.model.deleteMany({ price: { $gt: 300 } });

db.model.deleteMany({ title: "Games" });


{/*THANK-YOU*/ }
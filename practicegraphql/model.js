import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/graphql")
    .then(() => console.log("mongoose connected"))
    .catch((err) => {
        console.log("error")
    })


const graphSchema = new mongoose.Schema({
    name: String,
    email: String
})


const Graph = mongoose.model("Graph", graphSchema)

// Graph.insertMany([
//     { name: "Shivansh", email: "Shivneeraj2004@gmail.com" },
//     { name: "somya", email: "somya@gmail.com" },
//     { name: "tanishq", email: "tanishq@gmail.com" },
//     { name: "sparsh", email: "sparsh@gmail.com" }
// ])
//     .then((data) => {
//         console.log(data)
//     })

export { Graph }
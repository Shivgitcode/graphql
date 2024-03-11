import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import { Graph } from "./model.js";
import typeDefs from "./schema.js";

const resolvers = {
    Query: {
        async users() {
            const allUsers = await Graph.find({})
            return allUsers
        },
        async user(_, args) {
            const findOne = await Graph.findById(args.id)
            return findOne

        }
    },
    Mutation: {
        async deleteUser(_, args) {
            const deletedUser = await Graph.findByIdAndDelete(args.id)
            return deletedUser

        },
        async addUser(_, args) {
            const newUser = await Graph.create(args.user)
            return newUser

        },
        async updateUser(_, args) {
            const updatedUser = await Graph.findByIdAndUpdate(args.id, args.user)
            return updatedUser
        }
    }
}






const server = new ApolloServer({
    typeDefs,
    resolvers
}

)

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})


console.log(`server connected to ${url}`)

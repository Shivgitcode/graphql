import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import { Game, Graph } from "./model.js";
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

        },
        async games() {
            const allGames = await Game.find({})
            return allGames
        },
        async game(_, args) {
            const findGame = await Game.findById(args.id)
            return findGame
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
        },
        async addGame(_, args) {
            const newGame = await Game.create(args.game)
            const findUser = await Graph.findById(args.id)
            findUser.games.push(newGame)
            await findUser.save()
            return "Game added"

        },
        async deleteGame(_, args) {
            await Game.findByIdAndDelete(args.id)
            return "game deleted"

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

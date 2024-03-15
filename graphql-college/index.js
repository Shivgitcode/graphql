const dbConnect = require("./db/db");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

dbConnect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  try {
    const { url } = await startStandaloneServer(server, {
      listen: {
        port: 4000,
      },
    });

    console.log(`Server started at port ${url}`);
  } catch (err) {
    console.log(err.message);
  }
}

startServer();

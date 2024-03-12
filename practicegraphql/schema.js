const typeDefs = `#graphql
    type User{
        id:ID!
        name:String!
        email:String!
        games:[Game!]
    }
    type Game{
        id:ID!
        title:String!
        availableOn:String!
    }

    type Query{
        users:[User]
        user(id:ID!):User
        games:[Game]
        game(id:ID!):Game
    }

    type Mutation{
        addUser(user:AddUser):String!
        deleteUser(id:ID!):User
        updateUser(id:ID!,user:AddUser):User
        addGame(game:AddGame,id:ID!):String!
        deleteGame(id:ID!):String!

    }

    input AddUser{
        name:String
        email:String
    }

    input AddGame{
        
        title:String
        availableOn:String
    }

    



`

export default typeDefs
const typeDefs = `#graphql
    type User{
        id:ID!
        name:String!
        email:String!
    }

    type Query{
        users:[User]
        user(id:ID!):User
    }

    type Mutation{
        addUser(user:AddUser):User
        deleteUser(id:ID!):User
        updateUser(id:ID!,user:AddUser):User

    }

    input AddUser{
        name:String
        email:String
    }

    



`

export default typeDefs
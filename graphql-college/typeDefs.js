const typeDefs = `#graphql
    type Student{
        id:ID!
        name:String!
        email:String
    }


    type Query{
        students:[Student]

    }

    type Mutation{
        createUser(user:AddUser):String
    }

    input AddUser{
        name:String,
        email:String
    }


`;

module.exports = typeDefs;

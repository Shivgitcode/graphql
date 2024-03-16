const typeDefs = `#graphql
    type Student{
        id:ID!
        name:String!
        email:String
    }


    type Query{
        students:[Student]
        student(id:ID!):Student

    }

    type Mutation{
        createUser(user:AddUser):String
        updateUser(id:ID!,user:AddUser):String
        deleteUser(id:ID!):String

    }

    input AddUser{
        name:String,
        email:String
    }


`;

module.exports = typeDefs;

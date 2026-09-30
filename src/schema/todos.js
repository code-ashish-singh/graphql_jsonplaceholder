export const typedefs = ` #graphql
  type Todo{
    userId : ID!
    id : ID! 
    title : String!
    completed : Boolean!
  }
    type Query {
       todos : [Todo!]!
    }

`
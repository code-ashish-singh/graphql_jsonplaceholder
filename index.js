import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
import {  typedefs  } from "./src/schema/todos.js";
import { resolvers } from "./src/resolvers/todoResolvers.js";
import pkg from 'cors'
const {cors} = pkg


const server = new ApolloServer({
     typeDefs : typedefs,
    resolvers
})

const {url} = await startStandaloneServer(server,{
    listen : {
        port : 4000
    }
})

console.log(`server is running on the port ${url}`)
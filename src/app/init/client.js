import ApolloClient from "apollo-boost"

//server
const uri = "http://funded-pet-library.moonhighway.com/"
export const client = new ApolloClient ({
    uri
})

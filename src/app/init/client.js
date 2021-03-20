//import ApolloClient from "apollo-boost"
import { ApolloClient, InMemoryCache } from '@apollo/client'


//server
const uri = "http://funded-pet-library.moonhighway.com/"
// export const client = new ApolloClient({
//     uri,
//     defaultOptions: {
//         mutate: { errorPolicy: 'none' },
//     }
// })





export const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
      defaultOptions: {
        mutate: { errorPolicy: 'all' },
    }
});

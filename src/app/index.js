// Core
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

// Components
import { Pet } from './bus/pet'
import { Customer } from './bus/customer';
import { Login } from './bus/customer/login'

// Other
import { client } from './init/client'

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Customer />
      <Login />
      <Pet />
    </ApolloProvider>
  )
}




// import React from 'react'
// import { ApolloProvider } from "@apollo/react-hooks"
// import { client } from "./init/client"
// import { Pet } from "./bus/pet"
// import { Customer } from "./bus/customer"
// export const App = () => {
//     return (
//         <ApolloProvider client={client}>
//             <Customer />
//         </ApolloProvider>

//     )
// }
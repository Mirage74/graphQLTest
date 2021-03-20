import React from 'react'
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./init/client"
import { Pet } from "./bus/pet"
import { Customer } from "./bus/customer"
//<Pet />
//<Customer />
export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Customer />
        </ApolloProvider>

    )
}
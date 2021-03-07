import React from 'react'
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./init/client"
import { Pet } from "./bus/pet"
export const App = () => {
    return (
        <ApolloProvider client={client}>
            <Pet />
        </ApolloProvider>

    )
}
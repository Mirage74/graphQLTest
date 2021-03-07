import { useQuery } from "@apollo/react-hooks"
import { loader } from "graphql.macro"

const queryAvailablePets = loader('./gql/queryAvailablePets.graphql')

export const useQueryAvailablePets = () => {

//    console.log("hello 22222")
    //const {loading, error, data} = useQuery(queryAvailablePets)
    //console.log("datafdff ", data)
    return useQuery(queryAvailablePets)
}
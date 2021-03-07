import { useQuery } from "@apollo/react-hooks"
import { loader } from "graphql.macro"

const queryAllPets = loader('./gql/queryAllPets.graphql')


export const  useQueryAllPets =  () => {
    const {loading, error, data} = useQuery(queryAllPets)
    //console.log("data ", data)
    //const pets = data ? data.allPets : null



    
    
    //return useQuery(queryAllPets)

    
    return {loading, error, pets : data && data.allPets}
}





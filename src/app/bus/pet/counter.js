import { React } from "react"
import { useQueryAvailablePets } from "./hooks/useQueryAvailablePets";
//import { useQueryAllPets } from "./hooks/useQueryAllPets";

export const Counter = () => {
  const { loading, error, data } = useQueryAvailablePets()

//  const { loading, error, pets } = useQueryAllPets()
    
    if (loading) {
        return (
            <h5>loading...</h5>
        )
    } 
        
    
    if (error) {
        return (
            <p>
                Error : {error.message}
            </p>
        )
    }

    let forRender = data.availablePets
  //  let forRender = pets
    
    return (
        <>
        Available pets : {forRender}
        </>
    )
}






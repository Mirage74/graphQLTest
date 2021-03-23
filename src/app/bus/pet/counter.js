import { React } from "react"
import { useQueryAvailablePets } from "./hooks/useQueryAvailablePets";
//import { useQueryAllPets } from "./hooks/useQueryAllPets";

export const Counter = () => {
  const { loading, error, data, networkStatus  } = useQueryAvailablePets()

//  const { loading, error, pets } = useQueryAllPets()
    


    if (networkStatus === 1) {
        console.log("loading : ", networkStatus)

    } 

    if (networkStatus) {
        console.log("networkStatus : ", networkStatus)

    } 


    if (loading) {
        console.log("loading 222 : ", networkStatus)
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






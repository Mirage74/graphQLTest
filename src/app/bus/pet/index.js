import { React } from "react"
import { Counter } from "./counter"
import { List } from "./list"
import { SpecialList } from './specialList'

export const Pet = () => {
    return (
        <>
            <h1>Pet</h1>
            <Counter />
            <List />
            <SpecialList />            
        </>
    )
}
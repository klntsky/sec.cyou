import { createContext } from "react"

type FilterType = {
    tags: string[],
    chains: string[],
    text: string
}

export const filterContext = createContext()

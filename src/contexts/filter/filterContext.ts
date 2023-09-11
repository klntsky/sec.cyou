import { createContext, Context, Dispatch } from "react"

export type Filter = {
    tags: string[],
    chains: string[],
    text: string
};

export type FilterContext = {
    filter: Filter,
    setFilter: Dispatch<Filter>
};

export const defaultFilter: Filter = { tags: [], chains: [], text: "" };

export const filterContext: Context<FilterContext> = createContext()

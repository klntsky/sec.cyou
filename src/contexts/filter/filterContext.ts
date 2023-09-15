import { createContext, Context, Dispatch } from "react"

export type Filter = {
    tags: Set<string>,
    chains: Set<string>,
    text: string
};

export type FilterState = [ Filter, Dispatch<Filter> ];

export const defaultFilter: Filter = { tags: new Set(), chains: new Set(), text: "" };

export const filterContext: Context<FilterState> = createContext<FilterState>(
    [ defaultFilter, () => {} ]
);

import { useState, ReactNode } from 'react'
import { filterContext, defaultFilter } from '.'

export const FilterContextProvider = ({ children }: { children?: ReactNode }) => {
    const [filter, setFilter] = useState(defaultFilter)

    return (
        <filterContext.Provider value={[filter, setFilter]}>
            {children}
        </filterContext.Provider>
    )
}

import { useState } from 'react'
import { filterContext, defaultFilter } from '.'

export const FilterContextProvider = ({ children }: { children: any }) => {
    const [filter, setFilter] = useState(defaultFilter)

    return (
        <filterContext.Provider value={{filter, setFilter}}>
            {children}
        </filterContext.Provider>
    )
}

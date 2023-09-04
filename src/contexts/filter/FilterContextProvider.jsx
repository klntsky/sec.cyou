import { useState } from 'react'
import { filterContext } from '.'

export const FilterContextProvider = ({ children }) => {
    const [filter, setFilter] = useState()

    return (
        <filterContext.Provider value={[filter, setFilter]}>
            {children}
        </filterContext.Provider>
    )
}

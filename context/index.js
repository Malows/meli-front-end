/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from 'react'

const initialState = {
    categories: [],
    items: [],
}

export const SearchStateContext = createContext()

export const useSearchState = () => {
    const context = useContext(SearchStateContext)

    if (!context) {
        throw Error('useSearchState must be used inside SearchPrivder')
    }

    return context
}



export function SearchProvider ({ children }) {
    const [state, setState] = useState(initialState)

    return (
        <SearchStateContext.Provider value={[state, setState]}>
            {children}
        </SearchStateContext.Provider>
    )
}

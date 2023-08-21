import { ReactNode, createContext, useState } from "react"

type SearchContextType = {
    query: string,
    onChangeQuery: (query : string) => void
}

type SearchContextProviderProps = {
    children: ReactNode
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchContextProvider ({children} : SearchContextProviderProps) {

    const [query, setQuery] = useState("")

    const onChangeQuery = (query : string) => {
        setQuery(query)
    }

    return (
        <SearchContext.Provider
            value = {
                {
                    "query" : query,
                    "onChangeQuery" : onChangeQuery
                }
            }
        >
            {children}
        </SearchContext.Provider>
    )
}
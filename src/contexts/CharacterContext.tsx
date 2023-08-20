import { ReactNode, createContext } from "react";
import { CharacterType } from "../typings/CharacterType";

type CharacterContextType = {
    character: CharacterType
}

type CharacterContextProviderProps = {
    children: ReactNode,
    character: CharacterType
}

export const CharacterContext = createContext({} as CharacterContextType)

export function CharacterContextProvider ({character, children} : CharacterContextProviderProps) {
    return (
        <CharacterContext.Provider
            value = {
                {
                    character
                }
            }
        >
            {children}
        </CharacterContext.Provider>
    )
}
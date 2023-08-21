import { useContext, useEffect, useState } from "react"

import Character from "./Character"
import { CharacterType } from "@/typings/CharacterType"
import { api } from "@/services/api"
import { SearchContext } from "@/contexts/SearchContext"

import styles from "../styles/Characters.module.scss"

const Characters = () => {

    const { query } = useContext(SearchContext)

    const [characters, setCharacters] = useState<CharacterType[]>([])

    useEffect(() => {
        api.get(`/search?query=${query}`)
        .then((response) => {
            setCharacters(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [query])

    return (
        <ul className={styles.characters}>
            {characters.map((character) => 
                <Character
                    key={character.id}
                    character={character}
                />
            )}
        </ul>
    )
}

export default Characters
import { useEffect, useState } from "react"

import Character from "./Character"
import { CharacterType } from "@/typings/CharacterType"
import { api } from "@/services/api"

import styles from "../styles/Characters.module.scss"

const Characters = () => {

    const [characters, setCharacters] = useState<CharacterType[]>([])

    useEffect(() => {
        api.get("/characters")
        .then((response) => {
            setCharacters(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])

    return (
        <ul className={styles.characteres}>
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
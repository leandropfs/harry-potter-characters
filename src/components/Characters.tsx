import { useContext, useEffect, useState } from "react"
import Image from 'next/image'

import Character from "./Character"
import { CharacterType } from "@/typings/CharacterType"
import { api } from "@/services/api"
import { SearchContext } from "@/contexts/SearchContext"

import styles from "../styles/Characters.module.scss"

const Characters = () => {

    const { query } = useContext(SearchContext)

    const [characters, setCharacters] = useState<CharacterType[]>([])
    const [loadinfCharacters, setLoadingCharacters] = useState(true)

    useEffect(() => {
        setLoadingCharacters(true)
        api.get(`/search?query=${query}`)
        .then((response) => {
            setCharacters(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            setLoadingCharacters(false)
        })
    }, [query])

    return (loadinfCharacters ? (

            <div className={styles.loading}>
                <Image
                    src="/images/loading-white.gif"
                    alt="Loading"
                    width={135}
                    height={135}
                    priority
                />
            </div>
        
        ) : (characters.length == 0 ? (
                <div className={styles.notFounded}>
                    <h1>This character do not exist or he is in room of requiremente!</h1>
                </div>
            ) : (
                <ul className={styles.characters}>
                    {characters.map((character) => 
                        <Character
                            key={character.id}
                            character={character}
                        />
                    )}
                </ul>
            )
        )
    )
}

export default Characters
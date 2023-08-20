import { CharacterContextProvider } from "@/contexts/CharacterContext"
import { CharacterProps } from "@/typings/CharacterType"

import CharacterImage from "./CharacterImage"
import CharacterInfos from "./CharacterInfos"
import CharacterName from "./CharacterName"

import styles from '../styles/Character.module.scss'

const Character = (props : CharacterProps) => {
    return (
        <CharacterContextProvider character={props.character}>
            <li className={styles.character}>
                <CharacterImage />
                <div className={styles["character-info"]}>
                    <CharacterName />
                    <CharacterInfos />
                </div>
            </li>
        </CharacterContextProvider>
    )
}

export default Character
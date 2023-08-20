import useCharacter from "@/hooks/useCharacter"

import styles from '../styles/Character.module.scss'
import CharacterInfo from "./CharacterInfo"

const CharacterInfos = () => {

    const { dateOfBirth, actor, patronus, house } = useCharacter()

    return (
        <ul className={styles["character-infos"]}>
            <CharacterInfo type="dateOfBirth" info={dateOfBirth} />
            <CharacterInfo type="house" info={house} />
            <CharacterInfo type="patronus" info={patronus} />
            <CharacterInfo type="actor" info={actor} />
        </ul>
    )
}

export default CharacterInfos
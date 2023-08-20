import useCharacter from "@/hooks/useCharacter"

import styles from '../styles/Character.module.scss'

const CharacterName = () => {

    const { name } = useCharacter()

    return (
        <div className={styles["character-name"]}>
            <h2>
                {name}
            </h2>
        </div>
    )
}

export default CharacterName
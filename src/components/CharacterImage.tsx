import useCharacter from "@/hooks/useCharacter"

import styles from '../styles/Character.module.scss'

const CharacterImage = () => {

    const { image, name } = useCharacter()

    return (image && (
        <div className={styles["character-image"]}>
            <img 
                src={image}
                alt={name} 
            />
        </div>
    ))
}

export default CharacterImage
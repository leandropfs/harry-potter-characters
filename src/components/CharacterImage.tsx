import useCharacter from "@/hooks/useCharacter"

import styles from '../styles/Character.module.scss'

const CharacterImage = () => {

    const { image, name, alive } = useCharacter()

    const imageSrc = image ? image : "/images/no-image.png"

    return (
        <div className={`${styles["character-image"]} ${!alive && styles["character-dead"]}`}>
            <img 
                src={imageSrc}
                alt={name} 
            />
        </div>
    )
}

export default CharacterImage
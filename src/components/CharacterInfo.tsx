import { CharacterInfoProps } from "@/typings/CharacterType"

import styles from "../styles/Character.module.scss"

const CharacterInfo = (props : CharacterInfoProps) => {

    return (props.info && (
                <li className={`${styles["character-info-" + props.type]} ${styles[props.info]}`}>{props.info}</li>
            ))
}

export default CharacterInfo
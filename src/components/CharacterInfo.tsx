import { CharacterInfoProps } from "@/typings/CharacterType"

import styles from "../styles/Character.module.scss"


const formatInfo = (type: string, info : string | undefined) => {
    if (type == "dateOfBirth") {
        return info ? info.replaceAll("-", "/") : info
    }
    return info
}

const CharacterInfo = (props : CharacterInfoProps) => {

    const formatedInfo = formatInfo(props.type, props.info)

    return (props.info && (
                <li 
                    className={`${styles["character-info-" + props.type]} 
                    ${styles[props.info]}`}
                >
                    {formatInfo(props.type, props.info)}
                </li>
            ))
}

export default CharacterInfo
import { useContext } from "react"
import { CharacterContext } from "@/contexts/CharacterContext"

function useCharacter () {

    const { character } = useContext(CharacterContext)

    return character
}

export default useCharacter
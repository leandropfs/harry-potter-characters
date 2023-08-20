export type CharacterType = {
    id: string
    name: string
    image: string
    house?: string
    dateOfBirth?: string
    patronus?: string
    actor?: string
    alive?: boolean
}

export type CharacterProps = {
    character: CharacterType
}

export type CharacterInfoProps = {
    info?: string
    type: string
}
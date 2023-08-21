import { hpApi } from '@/services/api'
import { CharacterType } from '@/typings/CharacterType'
import type { NextApiRequest, NextApiResponse } from 'next'

const { Index } = require("flexsearch")

const options = {
    charset: "latin:extra",
    preset: 'score',
    tokenize: 'strict',
    cache: true
}

const searchIndex = new Index(options)

const buildIndex = async (characters : CharacterType[]) => {
    characters.forEach((character) => {
        searchIndex.add(character.id, character.name);
    })
}

const getCharactersByIds = (characters: CharacterType[], charactersIdsList : string[]) => {
    return characters.filter((character) => {
        return charactersIdsList.includes(character.id)
    })
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<CharacterType[]>
) {

    const characters = await hpApi.get("/characters")

    await buildIndex(characters.data)

    const query = req.query.query;

    const resultIds = query && query.length > 3 && await searchIndex.search(query, {
        query: query,
        suggest: true
    })

    const results = !query || query.length < 4 ? characters.data : getCharactersByIds(characters.data, resultIds)

    res.status(200).json(results)
}

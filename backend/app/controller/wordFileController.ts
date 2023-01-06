import { promises as fs } from "fs"

let WORDS: string[] = []

export const wordsByCharacterStrings = async (characterStrings: string[]): Promise<string[]> => {
    if (WORDS.length === 0) {
        await loadFile()
    }
    let toReturn: string[] = []
    characterStrings.forEach(characters => {
        toReturn.push(... WORDS.filter(word => firstCharactersEqual(characters, word)))
    })
    return toReturn
}

async function loadFile() {
    console.log('loading word file...')
    const data = await fs.readFile(`./app/assets/Wordlist2000common.txt`, { encoding: 'utf8' })
    WORDS = data.split('\n')
    console.log('word file loaded.')
}

function firstCharactersEqual(characters: string, word: string): boolean {
    const piece = word.slice(0, characters.length)
    return characters === piece
}
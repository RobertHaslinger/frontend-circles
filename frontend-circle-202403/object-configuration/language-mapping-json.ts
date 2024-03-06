import mappingFile from './language-mapping.json'

type DeeplLanguageCode =
    | "ar-BH"
    | "ar-DZ"
    | "ar-EG"
    | "de-AT"
    | "de-DE"
    | "de-CH"

const mySupportedLanguageCodes = [
    'ar',
    'ar-BH',
    'de',
    'de-AT'
] as const

type MyLanguageCode = typeof mySupportedLanguageCodes[number]

const isMyLanguageCode = (value: unknown): value is MyLanguageCode => {
    const myLanguageCode = value as MyLanguageCode

    return mySupportedLanguageCodes.includes(myLanguageCode)
}

const transformIntoMyLanguageCode = (deeplLanguageCode: DeeplLanguageCode): MyLanguageCode => {
    const deeplCodes = mappingFile.mappings.deeplLanguageCodes
    const myLanguageCode = deeplCodes[deeplLanguageCode]

    if (!isMyLanguageCode(myLanguageCode)) {
        throw new Error('Unsupported language code')
    }

    return myLanguageCode
}

// - Try extending DeeplLanguageCode with "en" => Error hint only on the usage instead of the definition (JSON file)
// - Try extending MyLanguageCode with "de-CH" and add a typo in the mapping file (e.g. "de-Ch") => No error hint

type DeeplLanguageCode =
    | "ar-BH"
    | "ar-DZ"
    | "ar-EG"
    | "de-AT"
    | "de-DE"
    | "de-CH"

const mappingObject = {
    mappings: {
        deeplLanguageCodes: {
            "de-AT": "de-AT",
            "de-DE": "de",
            "de-CH": "de",
            "ar-BH": "ar-BH",
            "ar-DZ": "ar",
            "ar-EG": "ar"
        }
    }
} as const satisfies {
    mappings: {
        deeplLanguageCodes: Record<DeeplLanguageCode, string>
    }
}

export const mySupportedLanguageCodes = Object.values(mappingObject.mappings.deeplLanguageCodes)

type MyLanguageCode = typeof mySupportedLanguageCodes[number]

const isMyLanguageCode = (value: unknown): value is MyLanguageCode => {
    const myLanguageCode = value as MyLanguageCode

    return mySupportedLanguageCodes.includes(myLanguageCode)
}

const transformIntoMyLanguageCode = (deeplLanguageCode: DeeplLanguageCode): MyLanguageCode => {
    const deeplCodes = mappingObject.mappings.deeplLanguageCodes
    const myLanguageCode = deeplCodes[deeplLanguageCode]

    if (!isMyLanguageCode(myLanguageCode)) {
        throw new Error('Unsupported language code')
    }

    return myLanguageCode
}

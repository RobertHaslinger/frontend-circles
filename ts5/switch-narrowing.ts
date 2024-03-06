import {isAxiosError} from "axios";

interface MyType {
    foo: string
    bar: number
}

const isMyType = (value: unknown): value is MyType => {
    const myType = value as MyType

    return myType.bar !== undefined && myType.foo !== undefined
}


const awesomeSwitch = (mysteryValue: unknown) => {
    switch (true) {
        case typeof mysteryValue === 'string': {
            return mysteryValue.charAt(1)
        }
        case isMyType(mysteryValue): {
            return `${mysteryValue.foo}: ${mysteryValue.bar}`
        }
        case Array.isArray(mysteryValue): {
            return mysteryValue[0]
        }
        default: {
            return mysteryValue
        }
    }
}

const myFetch = async () => {
    try {
        await Promise.reject('Whoops!')
    } catch (error) {
        switch (true) {
            case typeof error === 'string': {
                return `Handle string error, ${error}`
            }
            case isAxiosError(error): {
                return `Handle axios error, ${error.status}`
            }
            default: {
                return 'Maybe next time'
            }
        }
    }
}
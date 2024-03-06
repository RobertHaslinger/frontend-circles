export type AnimalTypeLiteral =
    | 'Dog'
    | 'Cat'
    | 'Bird'

export interface AnimalWithLiteral {
    type: AnimalTypeLiteral
    name: string
}

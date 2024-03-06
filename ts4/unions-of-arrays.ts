interface Animal {
    name: string
    weight: number
}

interface Car {
    name: string
    manufacturer: string
}

const isAnimal = (value: unknown): value is Animal => {
    const animal= value as Animal

    return animal.weight !== undefined && animal.name !== undefined
}

const filterAnimals = (array: Animal[] | Car[]): Animal[] => {
    return array.filter(isAnimal)
}
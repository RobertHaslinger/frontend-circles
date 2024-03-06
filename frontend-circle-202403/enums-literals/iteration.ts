//------- Enums

import {AnimalTypeEnum} from "./enums";

for(const animalType in AnimalTypeEnum) {
    console.log(animalType)
}



//------- Literals

//Does not work
for(const animalType in AnimalTypeLiteral) {
    console.log(animalType)
}

const animalTypeLiterals = [
    'Dog',
    'Cat',
    'Bird',
] as const

type AnimalTypeLiteralNew = typeof animalTypeLiterals[number]

for(const animalType of animalTypeLiterals) {
    console.log(animalType)
}


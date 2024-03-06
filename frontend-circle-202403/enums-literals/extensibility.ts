import {AnimalTypeEnum} from "./enums";
import {AnimalTypeLiteral} from "./literals";

//------- Enums

enum ExtinctAnimalsEnum {
    "Dinosaur" = 'Dinosaur',
    "Mammoth" = "Mammoth"
}

type AllAnimalsWithEnum =
    | AnimalTypeEnum
    | ExtinctAnimalsEnum

const dinoEnum: AllAnimalsWithEnum = ExtinctAnimalsEnum.Dinosaur
const catEnum: AllAnimalsWithEnum = AnimalTypeEnum.Cat




//------- Literals

type ExtinctAnimalLiteral =
    | 'Dinosaur'
    | 'Mammoth'

type AllAnimalsWithLiteral =
    | AnimalTypeLiteral
    | ExtinctAnimalLiteral
    | 'AnimalOnlyALiteralCanHave'

const dinoLiteral: AllAnimalsWithLiteral = "Dinosaur"
const catLiteral: AllAnimalsWithLiteral = 'Cat'
const specialLiteralAnimal: AllAnimalsWithLiteral = 'AnimalOnlyALiteralCanHave'
import {AnimalTypeEnum, AnimalWithEnum} from "./enums";
import {AnimalWithLiteral} from "./literals";

//------- Enums

const myCat1: AnimalWithEnum = {
    name: 'Balu',
    type: AnimalTypeEnum.Cat
}




//------- Literals

const myCat2: AnimalWithLiteral = {
    name: 'Ellie',
    type: 'Cat'
}
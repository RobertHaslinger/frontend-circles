//------- Enums

import {AnimalTypeEnum} from "./enums";
import {AnimalTypeLiteral} from "./literals";

type OnlyCoolAnimalsEnum = Exclude<AnimalTypeEnum, AnimalTypeEnum.Bird>

const coolAnimalEnum: OnlyCoolAnimalsEnum = AnimalTypeEnum.Cat

type LameAnimalsEnum = Extract<AnimalTypeEnum, 'Bird'>

const lameAnimalEnum: LameAnimalsEnum = AnimalTypeEnum.Bird




//------- Literals

type OnlyCoolAnimalsLiteral = Exclude<AnimalTypeLiteral, 'Bird'>

const coolAnimalLiteral: OnlyCoolAnimalsLiteral = 'Cat'

type LameAnimalsLiteral = Extract<AnimalTypeLiteral, 'Bird'>

const lameAnimalLiteral: LameAnimalsLiteral = 'Bird'
export enum AnimalTypeEnum {
    Dog = 'Dog',
    Cat = 'Cat',
    Bird = 'Bird',
}

export interface AnimalWithEnum {
    type: AnimalTypeEnum
    name: string
}


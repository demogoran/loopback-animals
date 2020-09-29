import {Entity, model, property} from '@loopback/repository';

@model()
export class Animal extends Entity {
  @property({id: true}) id: string;

  @property({
    type: 'date',
  })
  birthday?: string;

  @property({
    type: 'number',
  })
  species: number;

  @property({
    type: 'boolean',
    default: false,
  })
  vaccinated?: boolean;

  constructor(data?: Partial<Animal>) {
    super(data);
  }
}

export interface AnimalRelations {
  // describe navigational properties here
}

export type AnimalWithRelations = Animal & AnimalRelations;

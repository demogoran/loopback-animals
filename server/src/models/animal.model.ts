import {Entity, model, property, hasOne} from '@loopback/repository';
import {Species} from './species.model';

@model()
export class Animal extends Entity {
  @property({id: true}) id: string;

  @property({
    type: 'date',
  })
  birthday?: string;
  @property({
    type: 'boolean',
    default: false,
  })
  vaccinated?: boolean;

  @hasOne(() => Species, {keyTo: 'id'})
  species: Species;

  constructor(data?: Partial<Animal>) {
    super(data);
  }
}

export interface AnimalRelations {
  // describe navigational properties here
}

export type AnimalWithRelations = Animal & AnimalRelations;

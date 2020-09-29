import {Entity, model, property} from '@loopback/repository';

@model()
export class Species extends Entity {
  @property({id: true}) id: string;

  @property({
    type: 'date',
  })
  label?: string;

  constructor(data?: Partial<Species>) {
    super(data);
  }
}

export interface SpeciesRelations {
  // describe navigational properties here
}

export type SpeciesWithRelations = Species & SpeciesRelations;

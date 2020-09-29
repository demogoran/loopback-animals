import {model, property, hasOne} from '@loopback/repository';
import {Animal} from '.';
import {Owner} from './owner.model';

@model()
export class Pet extends Animal {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @hasOne(() => Owner, {keyTo: 'id'})
  owner: Owner;

  constructor(data?: Partial<Pet>) {
    super(data);
  }
}

export interface PetRelations {
  // describe navigational properties here
}

export type PetWithRelations = Pet & PetRelations;

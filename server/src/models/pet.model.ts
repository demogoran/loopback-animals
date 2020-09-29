import {model, property, hasOne} from '@loopback/repository';
import {Animal} from '.';
import {Owner} from './owner.model';

@model()
export class Pet extends Animal {
  @hasOne(() => Owner, {keyTo: 'id'})
  owner: Owner;

  constructor(data?: Partial<Animal>) {
    super(data);
  }
}

export interface PetRelations {
  // describe navigational properties here
}

export type PetWithRelations = Pet & PetRelations;

import {model, property} from '@loopback/repository';
import {Animal} from '.';

@model()
export class Pet extends Animal {

  constructor(data?: Partial<Pet>) {
    super(data);
  }
}

export interface PetRelations {
  // describe navigational properties here
}

export type PetWithRelations = Pet & PetRelations;

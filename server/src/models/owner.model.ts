import {Entity, model, property} from '@loopback/repository';

@model()
export class Owner extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  fullName: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Owner>) {
    super(data);
  }
}

export interface OwnerRelations {
  // describe navigational properties here
}

export type OwnerWithRelations = Owner & OwnerRelations;

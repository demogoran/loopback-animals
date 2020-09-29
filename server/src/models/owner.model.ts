import {Entity, model, property, hasOne} from '@loopback/repository';
import {Address} from './address.model';

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

  @hasOne(() => Address, {keyTo: 'id'})
  address: Address;

  constructor(data?: Partial<Owner>) {
    super(data);
  }
}

export interface OwnerRelations {
  // describe navigational properties here
}

export type OwnerWithRelations = Owner & OwnerRelations;

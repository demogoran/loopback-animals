import {DefaultCrudRepository} from '@loopback/repository';
import {Pet, PetRelations} from '../models';
import {PostgreDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PetRepository extends DefaultCrudRepository<
  Pet,
  typeof Pet.prototype.id,
  PetRelations
> {
  constructor(
    @inject('datasources.postgre') dataSource: PostgreDataSource,
  ) {
    super(Pet, dataSource);
  }
}

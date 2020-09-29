import {DefaultCrudRepository} from '@loopback/repository';
import {Species, SpeciesRelations} from '../models';
import {PostgreDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SpeciesRepository extends DefaultCrudRepository<
  Species,
  typeof Species.prototype.id,
  SpeciesRelations
> {
  constructor(
    @inject('datasources.postgre') dataSource: PostgreDataSource,
  ) {
    super(Species, dataSource);
  }
}

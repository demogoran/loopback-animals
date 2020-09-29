import {DefaultCrudRepository} from '@loopback/repository';
import {Animal, AnimalRelations} from '../models';
import {PostgreDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AnimalRepository extends DefaultCrudRepository<
  Animal,
  typeof Animal.prototype.id,
  AnimalRelations
> {
  constructor(
    @inject('datasources.postgre') dataSource: PostgreDataSource,
  ) {
    super(Animal, dataSource);
  }
}

import {DefaultCrudRepository} from '@loopback/repository';
import {WildAnimal, WildAnimalRelations} from '../models';
import {PostgreDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WildAnimalRepository extends DefaultCrudRepository<
  WildAnimal,
  typeof WildAnimal.prototype.id,
  WildAnimalRelations
> {
  constructor(
    @inject('datasources.postgre') dataSource: PostgreDataSource,
  ) {
    super(WildAnimal, dataSource);
  }
}

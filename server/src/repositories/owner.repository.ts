import {DefaultCrudRepository} from '@loopback/repository';
import {Owner, OwnerRelations} from '../models';
import {PostgreDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OwnerRepository extends DefaultCrudRepository<
  Owner,
  typeof Owner.prototype.id,
  OwnerRelations
> {
  constructor(
    @inject('datasources.postgre') dataSource: PostgreDataSource,
  ) {
    super(Owner, dataSource);
  }
}

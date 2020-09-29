import {DefaultCrudRepository} from '@loopback/repository';
import {Address, AddressRelations} from '../models';
import {PostgreDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AddressRepository extends DefaultCrudRepository<
  Address,
  typeof Address.prototype.id,
  AddressRelations
> {
  constructor(
    @inject('datasources.postgre') dataSource: PostgreDataSource,
  ) {
    super(Address, dataSource);
  }
}

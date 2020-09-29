import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Owner, OwnerRelations, Address} from '../models';
import {PostgreDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AddressRepository} from './address.repository';

export class OwnerRepository extends DefaultCrudRepository<
  Owner,
  typeof Owner.prototype.id,
  OwnerRelations
> {

  public readonly address: HasOneRepositoryFactory<Address, typeof Owner.prototype.id>;

  constructor(
    @inject('datasources.postgre') dataSource: PostgreDataSource, @repository.getter('AddressRepository') protected addressRepositoryGetter: Getter<AddressRepository>,
  ) {
    super(Owner, dataSource);
    this.address = this.createHasOneRepositoryFactoryFor('address', addressRepositoryGetter);
    this.registerInclusionResolver('address', this.address.inclusionResolver);
  }
}

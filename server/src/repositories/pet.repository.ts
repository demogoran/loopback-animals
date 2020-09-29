import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Pet, PetRelations, Owner} from '../models';
import {PostgreDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {OwnerRepository} from './owner.repository';

export class PetRepository extends DefaultCrudRepository<
  Pet,
  typeof Pet.prototype.id,
  PetRelations
> {

  public readonly owner: HasOneRepositoryFactory<Owner, typeof Pet.prototype.id>;

  constructor(
    @inject('datasources.postgre') dataSource: PostgreDataSource, @repository.getter('OwnerRepository') protected ownerRepositoryGetter: Getter<OwnerRepository>,
  ) {
    super(Pet, dataSource);
    this.owner = this.createHasOneRepositoryFactoryFor('owner', ownerRepositoryGetter);
    this.registerInclusionResolver('owner', this.owner.inclusionResolver);
  }
}

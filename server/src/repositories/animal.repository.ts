import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Animal, AnimalRelations, Species} from '../models';
import {PostgreDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {SpeciesRepository} from './species.repository';

export class AnimalRepository extends DefaultCrudRepository<
  Animal,
  typeof Animal.prototype.id,
  AnimalRelations
> {

  public readonly species: HasOneRepositoryFactory<Species, typeof Animal.prototype.id>;

  constructor(
    @inject('datasources.postgre') dataSource: PostgreDataSource, @repository.getter('SpeciesRepository') protected speciesRepositoryGetter: Getter<SpeciesRepository>,
  ) {
    super(Animal, dataSource);
    this.species = this.createHasOneRepositoryFactoryFor('species', speciesRepositoryGetter);
    this.registerInclusionResolver('species', this.species.inclusionResolver);
  }
}

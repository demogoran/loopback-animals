import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {Animal, Species} from '../models';
import {AnimalRepository} from '../repositories';

export class AnimalSpeciesController {
  constructor(
    @repository(AnimalRepository) protected animalRepository: AnimalRepository,
  ) {}

  @get('/animals/{id}/species', {
    responses: {
      '200': {
        description: 'Animal has one Species',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Species),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: number,
    @param.query.object('filter') filter?: Filter<Species>,
  ): Promise<Species> {
    return this.animalRepository.species(id).get(filter);
  }

  @post('/animals/{id}/species', {
    responses: {
      '200': {
        description: 'Animal model instance',
        content: {'application/json': {schema: getModelSchemaRef(Species)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Animal.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Species, {
            title: 'NewSpeciesInAnimal',
            exclude: ['id'],
            optional: ['id'],
          }),
        },
      },
    })
    species: Omit<Species, 'id'>,
  ): Promise<Species> {
    return this.animalRepository.species(id).create(species);
  }

  @patch('/animals/{id}/species', {
    responses: {
      '200': {
        description: 'Animal.Species PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Species, {partial: true}),
        },
      },
    })
    species: Partial<Species>,
    @param.query.object('where', getWhereSchemaFor(Species))
    where?: Where<Species>,
  ): Promise<Count> {
    return this.animalRepository.species(id).patch(species, where);
  }

  @del('/animals/{id}/species', {
    responses: {
      '200': {
        description: 'Animal.Species DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Species))
    where?: Where<Species>,
  ): Promise<Count> {
    return this.animalRepository.species(id).delete(where);
  }
}

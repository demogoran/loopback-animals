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
import {
  Pet,
  Owner,
} from '../models';
import {PetRepository} from '../repositories';

export class PetOwnerController {
  constructor(
    @repository(PetRepository) protected petRepository: PetRepository,
  ) { }

  @get('/pets/{id}/owner', {
    responses: {
      '200': {
        description: 'Pet has one Owner',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Owner),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Owner>,
  ): Promise<Owner> {
    return this.petRepository.owner(id).get(filter);
  }

  @post('/pets/{id}/owner', {
    responses: {
      '200': {
        description: 'Pet model instance',
        content: {'application/json': {schema: getModelSchemaRef(Owner)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Pet.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Owner, {
            title: 'NewOwnerInPet',
            exclude: ['id'],
            optional: ['id']
          }),
        },
      },
    }) owner: Omit<Owner, 'id'>,
  ): Promise<Owner> {
    return this.petRepository.owner(id).create(owner);
  }

  @patch('/pets/{id}/owner', {
    responses: {
      '200': {
        description: 'Pet.Owner PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Owner, {partial: true}),
        },
      },
    })
    owner: Partial<Owner>,
    @param.query.object('where', getWhereSchemaFor(Owner)) where?: Where<Owner>,
  ): Promise<Count> {
    return this.petRepository.owner(id).patch(owner, where);
  }

  @del('/pets/{id}/owner', {
    responses: {
      '200': {
        description: 'Pet.Owner DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Owner)) where?: Where<Owner>,
  ): Promise<Count> {
    return this.petRepository.owner(id).delete(where);
  }
}

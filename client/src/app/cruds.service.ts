import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';
import { Pet } from './interfaces';

const routes = {
  pet: 'pets',
};

@Injectable()
export class PetService extends ApiService<Pet> {
  constructor(protected _http: HttpClient) {
    super(_http, routes.pet);
  }
}

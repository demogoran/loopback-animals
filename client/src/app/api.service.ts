import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CrudOperations, Pet } from './interfaces';

const API_HOST = 'http://127.0.0.1:3000'; //move it to .env in ideal world

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService<T> implements CrudOperations<T> {
  constructor(protected _http: HttpClient, protected _route: string) {}

  save(t: T): Promise<T> {
    return this._http.post<T>(`${API_HOST}/${this._route}`, t).toPromise();
  }

  update(id: number, t: T): Promise<T> {
    return this._http
      .put<T>(`${API_HOST}/${this._route}/${id}`, t, {})
      .toPromise();
  }

  findOne(id: number): Promise<T> {
    return this._http.get<T>(`${API_HOST}/${this._route}/${id}`).toPromise();
  }

  findAll(): Promise<T[]> {
    return this._http.get<T[]>(`${API_HOST}/${this._route}`).toPromise();
  }

  delete(id: number): Promise<T> {
    return this._http.delete<T>(`${API_HOST}/${this._route}/${id}`).toPromise();
  }
}

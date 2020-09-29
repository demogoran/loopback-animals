export interface Pet {
  id?: number;
  vaccinated: boolean;
}

export interface CrudOperations<T> {
  save(t: T): Promise<T>;
  update(id: number, t: T): Promise<T>;
  findOne(id: number): Promise<T>;
  findAll(): Promise<T[]>;
  delete(id: number): Promise<any>;
}

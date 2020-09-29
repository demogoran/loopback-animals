import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'postgre',
  connector: 'postgresql',
  url: 'postgres://bobby:dobby@postgres/animals',
  host: 'postgres',
  port: 0,
  user: 'bobby',
  password: 'dobby',
  database: 'animals',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PostgreDataSource
  extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'postgre';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.postgre', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

import Knex from 'knex';
import dbConfig from '../../knexfile';

// TODO This should be read from environment variable or config file
const env = 'development';

const knex = Knex(dbConfig[env]);
export default knex;

knex.migrate.latest();

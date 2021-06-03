
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/spacetruckerapi',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    },
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }

};

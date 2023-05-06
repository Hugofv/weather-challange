import 'reflect-metadata';

import { ApolloServer } from 'apollo-server';
import path from 'path';
import { buildSchema } from 'type-graphql';
import { AddressResolver } from './src/resolvers/AddressResolver';
import { WeatherResolver } from './src/resolvers/WeatherResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [AddressResolver, WeatherResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  const server = new ApolloServer({
    schema: schema,
  });

  const { url } = await server.listen();
  console.log(`listening on ${url}`);
}

main();

// import 'reflect-metadata'
// import { buildSchema } from 'type-graphql'
// import BookResolver from './modules/book/BookResolver'
import {ApolloServer} from 'apollo-server';
import schema from './schema';

(async () => {
  // const typeDefs = gql`
  //   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  //   # This "Book" type defines the queryable fields for every book in our data source.
  //   type Book {
  //     title: String
  //     author: String
  //     desc: String!
  //   }

  //   # The "Query" type is special: it lists all of the available queries that
  //   # clients can execute, along with the return type for each. In this
  //   # case, the "books" query returns an array of zero or more Books (defined above).
  //   type Query {
  //     books: [Book]
  //   }
  // `;

  // const resolvers = {
  //   Query: {
  //     books: () => ([
  //       {
  //         id: 'X001',
  //         title: 'Harry Potter and the Chamber of Secrets',
  //         author: 'J.K. Rowling',
  //         desc: 'desc...',
  //       },
  //       {
  //         id: 'X002',
  //         title: 'Jurassic Park',
  //         author: 'Michael Crichton',
  //         desc: 'desc...',
  //       },
  //     ]),
  //   },
  // };

  // const schema = await buildSchema({
  //   resolvers: [BookResolver],
  // });

  const server = new ApolloServer({
    // typeDefs,
    // resolvers,
    schema,
    playground: true,
    introspection: true,
  });

  const {url} = await server.listen(4000, '0.0.0.0');
  console.log(`🚀 Server ready at ${url}`);
})();

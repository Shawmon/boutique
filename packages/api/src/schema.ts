import {GraphQLID, GraphQLString, GraphQLList, GraphQLObjectType, GraphQLNonNull, GraphQLSchema} from 'graphql';

import * as bookService from './bookService';
import {Book} from './bookService';

const GraphQLBookType: GraphQLObjectType<Book, null> = new GraphQLObjectType({
  name: 'Book',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: '书的ID',
      resolve: (src) => src.id,
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: '书的名字',
      resolve: (src) => src.title,
    },
  },
});

// type BookQueryArgs = {
//   id: string
// }

const GraphQLQueryType: GraphQLObjectType<null, null> = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLBookType))),
      description: '获取所有的书',
      resolve: (): Book[] => bookService.getAllBook(),
    },
    book: {
      type: GraphQLBookType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      description: '获取指定ID的书',
      resolve: (src, args) => bookService.getBookById(args.id),
    },
  },
});

const GraphQLMutationType: GraphQLObjectType<null, null> = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addBook: {
      type: GraphQLBookType,
      args: {
        id: {
          type: GraphQLID,
        },
        title: {
          type: GraphQLString,
        },
      },
      description: '添加一本书',
      resolve: (src, args) => bookService.addBook({id: args.id, title: args.title}),
    },
  },
});

const schema: GraphQLSchema = new GraphQLSchema({
  query: GraphQLQueryType,
  mutation: GraphQLMutationType,
});

export default schema;

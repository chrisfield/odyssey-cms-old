const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLString},
    name:{type: GraphQLString},
    genre: {type: GraphQLString}
  })
});

const books = [
  {
    id: "1",
    genre: "children",
    name: "Mr Sneaze"
  },
  {
    id: "2",
    genre: "children",
    name: "Mr Snow"
  }
];

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLString}},
      resolve(_parent, args) {
        return books.find((book) => (
          book.id === args.id
        ));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: rootQuery
});
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLID},
    name:{type: GraphQLString},
    genre: {type: GraphQLString}
  })
});

const SlotType = new GraphQLObjectType({
  name: 'Slot',
  fields: () => ({
    widget:{type: GraphQLString}
  })
});

const SectionType = new GraphQLObjectType({
  name: 'Section',
  fields: () => ({
    id: {type: GraphQLID},
    name:{type: GraphQLString},
    slots:{type: new GraphQLList(SlotType)}
  })
});


const sections = [
  {
    id: "1",
    name: "slot one",
    slots: [
      {widget: 'w1'},
      {widget: 'w2'}
    ]
  },
  {
    id: "2",
    name: "slot2",
    slots: [
      {widget: 'ww1'},
      {widget: 'ww2'}
    ]

  }
];

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
      args: {id: {type: GraphQLID}},
      resolve(_parent, args) {
        return books.find((book) => (
          book.id === args.id
        ));
      }
    },
    section: {
      type: SectionType,
      args: {id: {type: GraphQLID}},
      resolve(_parent, args) {
        return sections.find((section) => (
          section.id === args.id
        ));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: rootQuery
});
const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const mutation = require('./resolvers/Mutation');

const resolvers = {
    Query: {
        info: () => `This is a motivatinal app`,
        feed: (root, args, context, info) => {
            return context.prisma.quotes()
        },
        quote: (root, args, context, info) => {
            return context.prisma.quote({
                id: args.id
            })
        },
    },
    Mutation: mutation,
    Subscription: {
        newQuote: {
            subscribe: async (root, args, context, info) => {
                return context.prisma.$subscribe.quote({ mutation_in: ['CREATED'] }).node()
            },
            resolve: (payload) => payload,
        }
    },
    Quote: {
        id: parent => parent.id,
        description: parent => parent.description,
        postedBy: (root, args, context, info) => {
            return context.prisma.quote({ id: root.id }).postedBy()
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        }
    },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
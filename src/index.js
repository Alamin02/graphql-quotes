const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

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
    Mutation: {
        post: (root, args, context, info) => {
            return context.prisma.createQuote({
                description: args.description
            })
        },
        delete: (root, args, context, info) => {
            return context.prisma.deleteQuote({
                id: args.id
            })
        },
        update: (root, args, context, info) => {
            return context.prisma.updateQuote({
                where: {
                    id: args.id
                },
                data: {
                    description: args.description
                }
            })
        }
    },
    Subscription: {
        newQuote: {
            subscribe: async (root, args, context, info) => {
                return context.prisma.$subscribe.quote({ mutation_in: ['CREATED'] }).node()
            },
            resolve: (payload) => payload,
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
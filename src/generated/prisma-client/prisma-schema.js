module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateQuote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createQuote(data: QuoteCreateInput!): Quote!
  updateQuote(data: QuoteUpdateInput!, where: QuoteWhereUniqueInput!): Quote
  updateManyQuotes(data: QuoteUpdateManyMutationInput!, where: QuoteWhereInput): BatchPayload!
  upsertQuote(where: QuoteWhereUniqueInput!, create: QuoteCreateInput!, update: QuoteUpdateInput!): Quote!
  deleteQuote(where: QuoteWhereUniqueInput!): Quote
  deleteManyQuotes(where: QuoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  quote(where: QuoteWhereUniqueInput!): Quote
  quotes(where: QuoteWhereInput, orderBy: QuoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quote]!
  quotesConnection(where: QuoteWhereInput, orderBy: QuoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuoteConnection!
  node(id: ID!): Node
}

type Quote {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  description: String!
}

type QuoteConnection {
  pageInfo: PageInfo!
  edges: [QuoteEdge]!
  aggregate: AggregateQuote!
}

input QuoteCreateInput {
  id: ID
  description: String!
}

type QuoteEdge {
  node: Quote!
  cursor: String!
}

enum QuoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  description_ASC
  description_DESC
}

type QuotePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  description: String!
}

type QuoteSubscriptionPayload {
  mutation: MutationType!
  node: Quote
  updatedFields: [String!]
  previousValues: QuotePreviousValues
}

input QuoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QuoteWhereInput
  AND: [QuoteSubscriptionWhereInput!]
  OR: [QuoteSubscriptionWhereInput!]
  NOT: [QuoteSubscriptionWhereInput!]
}

input QuoteUpdateInput {
  description: String
}

input QuoteUpdateManyMutationInput {
  description: String
}

input QuoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [QuoteWhereInput!]
  OR: [QuoteWhereInput!]
  NOT: [QuoteWhereInput!]
}

input QuoteWhereUniqueInput {
  id: ID
}

type Subscription {
  quote(where: QuoteSubscriptionWhereInput): QuoteSubscriptionPayload
}
`
      }
    
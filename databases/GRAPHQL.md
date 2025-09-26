# GraphQL Study Guide

### 📄 Introduction to GraphQL
- **What is GraphQL?**
  - GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It allows clients to request only the data they need.

### 📦 Setting Up
- **Installing GraphQL**:
  - You can use GraphQL with various programming languages. For Node.js, install the necessary packages:
```bash
npm install graphql express-graphql
```

### 📋 Basic Concepts
- **Schema**:
  - Defines the types and structure of the data.
  
- **Types**:
  - **Object Types**: Define the shape of your data.
  - **Scalar Types**: Basic data types like `String`, `Int`, `Float`, `Boolean`, and `ID`.

### 🔄 Creating a Simple Schema
- **Defining a Schema**:
```javascript
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // Logic to get user data
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery
});
```

### 📦 Queries
- **Making a Query**:
```graphql
{
    user(id: "1") {
        name
        email
    }
}
```

### 📋 Mutations
- **Defining a Mutation**:
```javascript
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString }
            },
            resolve(parent, args) {
                // Logic to add user
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
```

- **Making a Mutation**:
```graphql
mutation {
    addUser(name: "Alice", email: "alice@example.com") {
        id
        name
    }
}
```

### 🔄 Subscriptions
- **Setting Up Subscriptions**:
```javascript
const Subscription = new GraphQLObjectType({
    name: 'Subscription',
    fields: {
        userAdded: {
            type: UserType,
            subscribe: () => pubsub.asyncIterator('USER_ADDED')
        }
    }
});
```

### 📦 Using Apollo Client
- **Installing Apollo Client**:
```bash
npm install @apollo/client graphql
```

- **Setting Up Apollo Client**:
```javascript
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});
```

### 📋 Documentation and Resources
- **Official Documentation**:
  - Refer to the [GraphQL documentation](https://graphql.org/learn/) for more detailed information and advanced features.

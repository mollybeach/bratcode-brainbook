# EdgeQL Study Guide

### 📄 Introduction to EdgeQL
- **What is EdgeQL?**
  - EdgeQL is a query language designed for querying and manipulating data in EdgeDB, a next-generation database that combines the benefits of relational databases with the flexibility of document databases.

### 📦 Setting Up EdgeDB
- **Installing EdgeDB**:
  - Follow the instructions on the [EdgeDB installation page](https://www.edgedb.com/docs/installation).

- **Creating a New EdgeDB Project**:
```bash
edgedb project init my_project
cd my_project
```

### 📋 Basic Queries
- **Selecting Data**:
```edgeql
SELECT User {
    id,
    name,
    email
};
```

- **Filtering Data**:
```edgeql
SELECT User FILTER .name = 'Alice';
```

### 🔄 Inserting Data
- **Inserting a New Record**:
```edgeql
INSERT User {
    name := 'Bob',
    email := 'bob@example.com'
};
```

### 📦 Updating Data
- **Updating Existing Records**:
```edgeql
UPDATE User
FILTER .name = 'Bob'
SET {
    email := 'bob_new@example.com'
};
```

### 📋 Deleting Data
- **Deleting Records**:
```edgeql
DELETE User
FILTER .name = 'Bob';
```

### 🔄 Using Functions
- **Defining a Function**:
```edgeql
CREATE FUNCTION get_user_count() {
    USING (
        SELECT count(User)
    );
};
```

- **Calling a Function**:
```edgeql
SELECT get_user_count();
```

### 📦 Schema Management
- **Creating a New Type**:
```edgeql
CREATE TYPE Product {
    required property name -> str;
    required property price -> decimal;
};
```

- **Migrating the Schema**:
```bash
edgedb migration create
edgedb migrate
```

### 📋 Transactions
- **Using Transactions**:
```edgeql
BEGIN;
    INSERT User {
        name := 'Charlie',
        email := 'charlie@example.com'
    };
COMMIT;
```

### 🔄 EdgeDB CLI
- **Using EdgeDB CLI**:
```bash
edgedb query "SELECT User;"
```

### 📜 Documentation and Resources
- **Official Documentation**:
  - Refer to the [EdgeDB documentation](https://www.edgedb.com/docs) for more detailed information and advanced features.

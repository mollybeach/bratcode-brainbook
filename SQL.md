# SQL Study Guide

### 📄 Database Basics
- **Creating a Database**:
```sql
CREATE DATABASE my_database;
```
- **Using a Database**:
```sql
USE my_database;
```

### 📋 Tables
- **Creating a Table**:
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
- **Dropping a Table**:
```sql
DROP TABLE users;
```

### 🔄 Data Manipulation
- **Inserting Data**:
```sql
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
```
- **Updating Data**:
```sql
UPDATE users SET email = 'alice_new@example.com' WHERE name = 'Alice';
```
- **Deleting Data**:
```sql
DELETE FROM users WHERE name = 'Alice';
```

### 🔍 Querying Data
- **Selecting Data**:
```sql
SELECT * FROM users;
```
- **Selecting Specific Columns**:
```sql
SELECT name, email FROM users;
```
- **Using WHERE Clause**:
```sql
SELECT * FROM users WHERE email LIKE '%example.com';
```

### 📊 Sorting and Filtering
- **Ordering Results**:
```sql
SELECT * FROM users ORDER BY created_at DESC;
```
- **Limiting Results**:
```sql
SELECT * FROM users LIMIT 5;
```

### 📋 Joins
- **Inner Join**:
```sql
SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```
- **Left Join**:
```sql
SELECT users.name, orders.amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

### 📈 Aggregation
- **Counting Rows**:
```sql
SELECT COUNT(*) FROM users;
```
- **Using GROUP BY**:
```sql
SELECT COUNT(*), created_at
FROM users
GROUP BY created_at;
```
- **Using Aggregate Functions**:
```sql
SELECT AVG(amount) FROM orders;
```

### 🔑 Indexes
- **Creating an Index**:
```sql
CREATE INDEX idx_email ON users(email);
```
- **Dropping an Index**:
```sql
DROP INDEX idx_email ON users;
```

### 🔒 Transactions
- **Using Transactions**:
```sql
START TRANSACTION;

INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com');
UPDATE users SET email = 'bob_new@example.com' WHERE name = 'Bob';

COMMIT; -- or ROLLBACK; to undo
```

### 📜 Views
- **Creating a View**:
```sql
CREATE VIEW user_emails AS
SELECT name, email FROM users;
```
- **Querying a View**:
```sql
SELECT * FROM user_emails;
```

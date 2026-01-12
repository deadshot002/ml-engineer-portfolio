// WARNING: VULNERABLE CODE - SQL Injection Demo
// DO NOT USE IN PRODUCTION
// This module demonstrates SQL injection vulnerabilities for CodeQL detection

import { createConnection } from 'mysql2/promise';

// Mock database connection for demo purposes
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'gitfolio'
};

// VULNERABILITY: SQL Injection - Direct string concatenation
export async function getUserByName(username) {
  const connection = await createConnection(dbConfig);
  
  // User input concatenated directly into SQL query
  // An attacker could use input like: "admin' OR '1'='1"
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  
  const [rows] = await connection.execute(query);
  await connection.end();
  
  return rows;
}

// VULNERABILITY: SQL Injection in search function
export async function searchUsers(searchTerm) {
  const connection = await createConnection(dbConfig);
  
  // Another example of SQL injection
  const query = `SELECT id, username, email FROM users WHERE username LIKE '%${searchTerm}%' OR email LIKE '%${searchTerm}%'`;
  
  const [rows] = await connection.execute(query);
  await connection.end();
  
  return rows;
}

// VULNERABILITY: SQL Injection in delete operation
export async function deleteUser(userId) {
  const connection = await createConnection(dbConfig);
  
  // Direct concatenation in DELETE statement
  const query = `DELETE FROM users WHERE id = ${userId}`;
  
  await connection.execute(query);
  await connection.end();
  
  return { success: true };
}

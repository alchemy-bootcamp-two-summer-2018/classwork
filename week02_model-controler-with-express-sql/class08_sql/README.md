Class 08: SQL & Postgres
===

## Schedule
1. CRUD and SQL
1. Lab Prep

## Learning Objectives

* Understand the basic concepts of databases
* Effectively use basic SQL commands to create, read, update, and delete rows from a table
* Understand the fundamental architecture of full-stack applications and how we can locally emulate them

## SQL and CRUD

### Relational Databases

* Common DBMS - MySQL, PostgreSQL, SQLite, etc
    * [Article comparing the three](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)

### SQL

The language we use to query and update our database

* Syntax
* Statements
* Clauses
* Constraints
* Expressions
* Predicates
* [SQL cheat sheet](http://www.cheat-sheets.org/sites/sql.su/)
* Data types
    * **INTEGER**
    * **NOT NULL**
    * **PRIMARY KEY**
    * **CHAR**
    * **VARCHAR**

* CRUD - the different functions we perform on our database
    * C - CREATE
    * R - READ
    * U - UPDATE
    * D - DESTROY (or DELETE)

* PostgreSQL (our database) and psql (a cli to our database)
    * starting your database server
        * PC: `pg_ctl -D 'C:/Program Files/PostgreSQL/9.6/data' start`
        * MAC: `pg_ctl -D /usr/local/var/postgres/ -l /usr/local/var/postgres/server.log start`
        * or if you created an alias in your `.bashrc`: `pgstart` 
* Node and SQL
    * Using the `pg` module to connect to our PostgreSQL server
    * Using `body-parser` to get info from our request body

## Readings

* [SQLBolt (Intro, Lessons 1-4, 13-18)](http://sqlbolt.com/)
* [A Primer on SQL](https://leanpub.com/aprimeronsql/read) (Reference)

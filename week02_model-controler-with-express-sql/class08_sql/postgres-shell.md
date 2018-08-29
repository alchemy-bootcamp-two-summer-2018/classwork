# PostgreSQL Shell Cheat Sheet

## Starting the server

You _may_ do this every time you restart your machine. Depending on your settings, your database may autostart when your computer restarts.

```sh
$ pgstart

# pgstart is an alias for the following command
$ pg_ctl -D /usr/local/var/postgres/ -l /usr/local/var/postgres/server.log start

# If you installed postgreSQL with HomeBrew, you can also do this:
$ brew services start postgres
```

## Creating a user-default database

```
$ createdb
```

* This will create a new database with the same name as your user login 
* You only have to do this once

```
$ createdb animals
```

This will create a new database called animals, which can contain many individual tables

## Starting the postgres shell

Start psql and see shell prompt. With no arguments, `psql` will start the shell at your user-default database:

```
$ psql

marty=#
```

This will start the shell at our animals database:

```
$ psql animals

animals=#
```

## Quit the postgres shell

```
marty=# \q

$
```

## Basic shell navigation

### List all of your databases

```
marty=# \l

List of databases
Name    |   Owner   | Encoding |   Collate   |    Ctype    |    Access privileges
-----------+-----------+----------+-------------+-------------+----------
movies  | marty | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
marty   | marty | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
(2 rows)

```

### Connect to a database

```
marty=# \c movies
You are now connected to database "movies" as user "marty".
movies=# \c marty
You are now connected to database "marty" as user "marty".
```

### List all relations (tables) in the database

```
marty=# \dt

List of relations
Schema |   Name   | Type  |   Owner
--------+----------+-------+-----------
public | articles | table | marty
public | authors  | table | marty
(4 rows)
```

### Display the schema configuration (column properties)

```
marty=# \d articles

Table "public.authors"
Column   |          Type          |       Modifiers
-----------+------------------------+-----------------------
author_id | integer                | not null default
author    | character varying(255) | not null
authorUrl | character varying(255) |
Indexes:
  "authors_pkey" PRIMARY KEY, btree (author_id)
```

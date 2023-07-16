import React from "react";
import * as SQLite from "expo-sqlite";
import { createContext } from "react";

export function initDatabase(): SQLite.SQLiteDatabase {
  const db = SQLite.openDatabase("db.pocket_money");

  db.execAsync([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false); 
  return db;
}


const DBInstance = initDatabase()


export function createCategory() {
  const query: string = `
  CREATE TABLE IF NOT EXISTS category(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    value TEXT UNIQUE NOT NULL
  );`
  return DBInstance.execAsync([{ sql: query, args: []}], false);
}

export function createBreakDown() {
  const query: string = `
  CREATE TABLE IF NOT EXISTS breakDown(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    price INTEGER NOT NULL,
    category_id INTGER
    date DATE,
    CONSTRAINT category_key FOREIGN KEY(category_id)
    REFERENCES category(id)
  );`
  return DBInstance.execAsync([{ sql: query, args: []}], false);
}

export function insertCategory(category: string) {
  const query: string = `INSERT INTO category(value) values("${category}");`
  return DBInstance.execAsync([{sql: query, args: []}], false);
}

export function selectAllCategory() {
  const query: string = `SELECT * FROM category;`
  return DBInstance.execAsync([{sql: query, args: []}], false);
}

export const DBContext = createContext({DBInstance, createBreakDown, createCategory, insertCategory, selectAllCategory});
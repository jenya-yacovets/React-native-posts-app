import * as SQLite from 'expo-sqlite'

const DB_NAME = 'post.db'

const db = SQLite.openDatabase(DB_NAME)

export default class DB {

    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, text TEXT, img TEXT, booked INT, date TEXT)',
                    [],
                    () => resolve(),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static getPosts() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM posts',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static createPost({name, text, img, date}) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO posts (name, text, date, img, booked) VALUES (?, ?, ?, ?, ?)`,
                    [name, text, date, img, 0],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static updatePost({ booked, id}) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'UPDATE posts SET booked=? WHERE id=?',
                    [booked ? 1 : 0, id],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static removePost({id}) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'DELETE FROM posts WHERE id=?',
                    [id],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }
}
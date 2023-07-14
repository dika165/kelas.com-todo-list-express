import dbPool from "../utils/db.js";

class Task {
    static getAll(){
        sql = "SELECT * FROM tasks";
        return dbPool.query(sql);
    }

    static getById(id){
        sql = 'SELECT * FROM tasks WHERE id = ?';
        return dbPool.query(sql, [id]);
    }

    static create({ name, completed }) {
        sql = 'INSERT INTO tasks (name, completed) VALUES (?, ?)';
        return dbPool.query(sql, [name, completed]);
      }
    
    static update(id, { name, completed }) {
        return dbPool.query('UPDATE tasks SET name = ?, completed = ? WHERE id = ?', [name, completed]);
      }
    
    static delete(id) {
        return dbPool.query('DELETE FROM tasks WHERE id = ?', [id]);
    }
}

export default Task;
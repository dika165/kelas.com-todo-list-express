import dbPool from "../utils/db.js";

class Task {
    static getAll(){
        const sql = "SELECT * FROM tasks";
        return dbPool.query(sql);
    }

    static getById(id){
        const sql = 'SELECT * FROM tasks WHERE id = ?';
        return dbPool.query(sql, [id]);
    }

    static create({ name, completed }) {
        const sql = 'INSERT INTO tasks (name, completed) VALUES (?, ?)';
        return dbPool.query(sql, [name, completed]);
      }
    
    static update(id, { name, completed }) {
        return dbPool.query('UPDATE tasks SET name = ?, completed = ? WHERE id = ?', [name, completed,id]);
      }
    
    static delete(id) {
        return dbPool.query('DELETE FROM tasks WHERE id = ?', [id]);
    }
}

export default Task;
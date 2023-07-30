import dbPool from "../utils/db.js";

class Task {
    getAll(){
        const sql = "SELECT * FROM tasks";
        return dbPool.query(sql);
    }

    getById(id){
        const sql = 'SELECT * FROM tasks WHERE id = ?';
        return dbPool.query(sql, [id]);
    }

    create({ name, completed }) {
        const sql = 'INSERT INTO tasks (name, completed) VALUES (?, ?)';
        return dbPool.query(sql, [name, completed]);
      }

    update(id, { name, completed }) {
        return dbPool.query('UPDATE tasks SET name = ?, completed = ? WHERE id = ?', [name, completed,id]);
      }

    delete(id) {
        return dbPool.query('DELETE FROM tasks WHERE id = ?', [id]);
    }
}

export default Task;

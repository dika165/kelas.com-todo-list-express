import dbPool from "../utils/db.js";

class Task {
    getAll(){
        const sql = "SELECT * FROM users";
        return dbPool.query(sql);
    }

    getById(id){
        const sql = 'SELECT * FROM users WHERE id = ?';
        return dbPool.query(sql, [id]);
    }

    create({ name, completed }) {
        const sql = 'INSERT INTO users (name, completed) VALUES (?, ?)';
        return dbPool.query(sql, [name, completed]);
      }
    
    update(id, { name, completed }) {
        return dbPool.query('UPDATE users SET name = ?, completed = ? WHERE id = ?', [name, completed,id]);
      }
    
    delete(id) {
        return dbPool.query('DELETE FROM users WHERE id = ?', [id]);
    }
    
    authUser({username, password}) {
        const sql = "SELECT id, username FROM users WHERE username = ? AND password = ?";
        const value = [username, password];
        const [users] = dbPool.query(sql, value);

        return users;
    }
}
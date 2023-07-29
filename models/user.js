import dbPool from "../utils/db.js";

    export const getAll = () => {
        const sql = "SELECT * FROM users";
        return dbPool.query(sql);
    }

    export const getById = (id) => {
        const sql = 'SELECT * FROM users WHERE id = ?';
        return dbPool.query(sql, [id]);
    }

    export const createData = ({ name, email, password}) => {
        let createdAt = new Date();
        const sql = 'INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, ?)';
        return dbPool.query(sql, [name, email, password, createdAt]);
      }
    
    export const updateData = (id, { name, email }) => {
        let updatedAt = new Date();
        return dbPool.query('UPDATE users SET name = ?, email = ?, updated_at = ? WHERE id = ?', [name, completed,email, updatedAt, id]);
      }
    
    export const deleteData = (id) => {
        return dbPool.query('DELETE FROM users WHERE id = ?', [id]);
    }
    
   export const authUser = ({email, password}) => {
        const sql = "SELECT id, name, email FROM users WHERE email = ? AND password = ?";
        const value = [email, password];
        const [users] = dbPool.query(sql, value);

        return users;
    }
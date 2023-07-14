import dbPool from "../utils/db.js";

class Task {
    constructor (id, name, completed) {
        this.id = id, 
        this.name = name
        this.completed = completed || false
    }

    static getAll(){
        const query = "SELECT * FROM tasks";

        return dbPool.query(query);
    }

    static createTask(name, completed){
        const query = "INSERT INTO tasks (name, completed) VALUE(?,?)";
        return dbPool.query(query,[name, completed]);
    }
}

export default Task;
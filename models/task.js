class Task {
    constructor (id, name, completed) {
        this.id = id, 
        this.name = name
        this.completed = completed || false
    }
}

export default Task;
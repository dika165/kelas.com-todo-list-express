/*
    1. buat API menggunakan express js;
    2. buat object lagu dengan atribut dengan atribut : id, judul_lagu, artis, favorite
    2. Buat endpoint get list data lagu
    3. buat endpoint tambah lagu, tambah lagu favorit.
    4. buat endpoint get list lagu favorit saja.
*/

import express from "express";
import { nanoid } from "nanoid";

class Task {
    constructor (id, name, completed) {
        this.id = id, 
        this.name = name
        this.completed = completed || false
    }
}

let tasks = [];

const app = express();
const port = 8080;
const host = "localhost";

app.use(express.json());

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({message:"data not found!!"})

    res.json(task);
})

app.post('/tasks', (req, res) => {
    const task = new Task(nanoid(6), req.body.name, req.body.completed);
    
    tasks.push(task);
    res.json(task)
});

app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === req.params.id)
    if (!task) return res.status(404).json({message:"data not found!!"})
    
    task.name = req.body.name;
    task.completed = req.body.completed;
    res.json(task);
});

app.delete('/tasks/:id',(req, res) => {
    const index = tasks.findIndex(t=> t.id === req.params.id);
    if(!task) return res.status(404).json({message:"data not found!"})

    const task = tasks.splice(index, 1);
    res.json(task);
});

app.listen(port,host,()=>{
    console.log(`server berjalan di http://${host}:${port}`);
});
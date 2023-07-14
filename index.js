import express from "express";
import { nanoid } from "nanoid";
import taskRoute from "./routes/taskRoute.js"
/*
    1. buat API menggunakan express js;
    2. buat object lagu dengan atribut dengan atribut : id, judul_lagu, artis, favorite
    2. Buat endpoint get list data lagu
    3. buat endpoint tambah lagu, tambah lagu favorit.
    4. buat endpoint get list lagu favorit saja.
*/

const app = express();
const port = 8080;
const host = "localhost";

app.use(express.json());
app.use('/tasks',taskRoute);

app.listen(port,host,()=>{
    console.log(`server berjalan di http://${host}:${port}`);
});
import express from "express";
import { nanoid } from "nanoid";
import taskRoute from "./routes/taskRoute.js";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import { errorResp } from "./utils/response.js";
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
app.use('/users', userRoute);
app.use('/login', authRoute);

app.use((err, req, res, next) => {
    const msg = "internal server error";
    console.log(err.message)
    errorResp(res, msg , 500)
})
app.listen(port,host,()=>{
    console.log(`server berjalan di http://${host}:${port}`);
});

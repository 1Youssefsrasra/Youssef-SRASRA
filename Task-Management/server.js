import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pool  from "./config/db.js"

import routes from "./routes/index.js"
import errorHandling from "./middlewares/errorHandler.js"
import createTaskTable from "./data/createTaskTable.js"
import createCategoryTable from "./data/createCategoryTable.js"

dotenv.config();


const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use(cors());


app.use('/api', routes);

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use(errorHandling);

createCategoryTable();
createTaskTable();

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});

  
import pool from "../config/db.js";

const createTaskTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS tasks(
  id SERIAL PRIMARY KEY, 
  title VARCHAR(100) NOT NULL,
  description VARCHAR(100) UNIQUE NOT NULL,
  category categories NOT NULL,
  priority ENUM('Low', 'Medium', 'High') NOT NULL,
  due_date DATE NOT NULL;

)`;
    try{
        pool.query(queryText);
        console.log("task table created successfully!!");

    }catch(err){
        console.log("error creating the task table")

    }
};

export default createTaskTable;
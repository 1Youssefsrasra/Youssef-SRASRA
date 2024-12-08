import pool from "../config/db.js";

const createCategoryTable = async () => {
    const queryText = `

  CREATE TABLE IF NOT EXISTS categories(
  id SERIAL PRIMARY KEY, 
  category_name VARCHAR(100) NOT NULL;

)`;
    try{
        pool.query(queryText);
        console.log("category table created successfully!!");

    }catch(err){
        console.log("error creating the category table")

    }
};

export default createCategoryTable;
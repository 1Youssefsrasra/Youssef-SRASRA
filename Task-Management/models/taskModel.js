import pool from "../config/db.js";

export const getTasksService = async () => {
    const result = await pool.query("SELECT * FROM tasks");
    return result.rows;
}

export const getTaskService = async (id) => {
    const result = await pool.query("SELECT * FROM tasks WHERE id=$1", [id]);
    return result.rows[0];
}

export const getTasksByCategoryAndPriorityService = async (category, priority) => {
    const result = await pool.query("SELECT * FROM tasks WHERE category=$1 AND priority=$2", [category, priority]);
    return result.rows[0];
}

export const createTaskService = async (title, description, category, priority, due_date) => {
    const result = await pool.query("INSERT INTO tasks (title, description, category, priority, due_date) VALUES($1 , $2, $3, $4, $5) RETURNING *", [title, description, category, priority, due_date]);
    return result.rows[0];
}
export const deleteTaskService = async (id) => {
    const result = await pool.query("DELETE FROM tasks WHERE id=$1 RETURNING *", [id]);
    return result.rows[0];
}

export const updateTaskService = async (id, title, description, category, priority, due_date) => {
    const result = await pool.query("UPDATE tasks SET tilte=$1, description=$2 category=$3 priority=$4 due_date=$5 WHERE id=$6 RETURNING *", [title, description, category, priority, due_date, id]);
    return result.rows[0];
}




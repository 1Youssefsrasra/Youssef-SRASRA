

export const getCategoryService = async () => {
    const result = await pool.query("SELECT * FROM categories");
    return result.rows;
}

export const createCategoryService = async (category_name) => {
    const result = await pool.query("INSERT INTO categories (category_name) VALUES($1) RETURNING *", [category_name]);
    return result.rows[0];
}
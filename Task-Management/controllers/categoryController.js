import { createCategoryService, getCategoryService } from "../models/categoryModel.js";

const handleResponse = (res, status, message, data=null) =>{
    res.status(status).json({
        status,
        message,
        data,
    });
};


export const createCategory = async (req, res, next)=>{
    const {category_name} = req.body
    try{
        const newCategory = await createCategoryService(category_name);
        handleResponse(res, 201, "Category created successfully", newCategory);
    }catch(err){
        next(err);
    }
}

export const getCategory = async (req, res, next)=>{
    try{
        const categories = await getCategoryService();
        handleResponse(res, 200, "Tasks fetched successfully", categories);
    }catch(err){
        next(err);
    }
}

export const deleteCategory = async (req, res, next)=>{
    try{
        const category = await deleteCategoryService(req.params.id);
        if (!category) return handleResponse(res, 404, "Task not found");
        handleResponse(res, 200, "Category deleted successfully", category);
    }catch(err){
        next(err);
    }
}
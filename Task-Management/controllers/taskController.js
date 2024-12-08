import { createTaskService, deleteTaskService, getTasksByCategoryAndPriorityService, getTaskService } from "../models/taskModel.js";

const handleResponse = (res, status, message, data=null) =>{
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createTask = async (req, res, next)=>{
    const {title, description, category, priority, due_date} = req.body
    try{
        const newTask = await createTaskService(title, description, category, priority, due_date);
        handleResponse(res, 201, "Task created successfully", newTask);
    }catch(err){
        next(err);
    }
}


export const updateTask = async (req, res, next)=>{
    const {title, description, category, priority, due_date} = req.body
    try{
        const newTask = await updateTaskService(title, description, category, priority, due_date);
        handleResponse(res, 201, "Task created successfully", newTask);
    }catch(err){
        next(err);
    }
}


export const getTasks = async (req, res, next)=>{
    try{
        const tasks = await getTasksService();
        handleResponse(res, 200, "Tasks fetched successfully", tasks);
    }catch(err){
        next(err);
    }
}

export const getTask = async (req, res, next)=>{
    try{
        const task = await getTaskService(req.params.id);
        handleResponse(res, 200, "Task fetched successfully", task);
    }catch(err){
        next(err);
    }
}

export const getTasksByCategoryAndPriority = async (req, res, next)=>{
    try{
        const tasks = await getTasksByCategoryAndPriorityService(req.params.category, req.params.priority);
        handleResponse(res, 200, "Tasks fetched successfully", tasks);
    }catch(err){
        next(err);
    }
}

export const deleteTask = async (req, res, next)=>{
    try{
        const task = await deleteTaskService(req.params.id);
        if (!task) return handleResponse(res, 404, "Task not found");
        handleResponse(res, 200, "Task deleted successfully", task);
    }catch(err){
        next(err);
    }
}


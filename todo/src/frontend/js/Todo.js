import  * as database from './database.js';

export {Todo};

class Todo {
    constructor(taskDetail,isCompleted){
        this.taskDetail=taskDetail;
        this.isCompleted=isCompleted;
    }

}
let taskDetail = "Say hello to the server!";
// let isCompleted = false;
async function useAddTask(){
    const task = new Todo(taskDetail);
    await database.addTask(task).then(async (response)=>{
        let responseData = await response.json()
        console.log("Created:\n ",responseData);
    })
    .catch(error=>{console.log(error)})
}

async function useAllTaskData(){
    let res = await database.getAllTaskFromDatabase().catch(error =>{
        console.log(error);
    });
    console.log(res)
}

async function useTaskById(){
    let res = await database.getTasksByTaskId(1)
    .catch(error =>console.error(error))
}

async function useDeleteById(){
    let response = await database.deleteTask(3)
    .catch(error =>console.log(error))
    if(response.status === 200){
        console.log("success");
    }else {
        console.log("task not found");
    }
}

async function useUpdateStatus(id){
    let response = await database.updateStatus(id).catch(error=>console.log(error));
    if(response.status === 200){
        console.log("successfully updated the status of task to completed");
    }
}
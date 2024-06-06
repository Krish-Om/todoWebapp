import  * as database from './databaseController.js';

export {Task};

class Task {
    constructor(taskDetail,isCompleted){
        this.taskDetail=taskDetail;
        this.isCompleted=isCompleted;
    }

}
let taskDetail = "Say hello to the server!";
// let isCompleted = false;
async function useAddTask(){
    const task = new Task(taskDetail);
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
useAllTaskData()

async function useTaskById(id){
    let res = await database.getTasksByTaskId(id)
    .catch(error =>console.error(error))

    return res;
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



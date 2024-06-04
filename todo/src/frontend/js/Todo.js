import { getAllTaskFromDatabase, getTasksByTaskId } from './database.js';

export {Todo};

class Todo {
    constructor(taskDetail,isCompleted){
        this.taskDetail=taskDetail;
        this.isCompleted=isCompleted;
    }
}

async function useAllTaskData(){
    let res = await getAllTaskFromDatabase().catch(error =>{
        console.log(error);
    });
    console.log(res)
}

async function useTaskById(){
    let res = await getTasksByTaskId(1)
    .catch(error =>console.error(error))
    console.log(res);
}
// console.log(res);
useAllTaskData();
useTaskById();

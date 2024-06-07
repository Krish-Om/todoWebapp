import * as database from '../Services/task-service.js';

// export { Task };


// let taskDetail = "Have a coffee!";
// let isCompleted = false;
 function addTask(taskDetail,isCompleted=false) {
    const task = {
        taskDetail,
        isCompleted
    }
     database.addTask(task).then(async (response) => {
        let responseData = await response.json()
        console.log("Created:\n ", responseData);
    })
        .catch(error => { console.log(error) })
}
 function allTask() {
    return database.getAllTaskFromDatabase()
}

async function getTaskById(id) {
    let res = await database.getTasksByTaskId(id)
        .catch(error => console.error(error))

    return res;
}

 async function deleteById() {

    // try {
    //      await database.deleteTask(3)
    //     console.log("success");
    // } catch (error) {
    //     console.log("task not found");
    // }
    database.deleteTask(3).then(res=>{
        console.log("success");
    }).catch(error=>{
        console.log("task not found");
    })
   
    
}

 function updateStatus(id) {
     database.updateStatus(id).then(()=>{
        console.log("successfully updated the status of task");
     }).catch(error => console.log(error));
    
}

// updateStatus(1);
const keys = ['id', 'isCompleted', 'taskDetail'];

 function returnTask() {
    let taskMap =  useAllTaskData();
    keys.forEach(id => {
        for (const id in taskMap) {
            console.log(taskMap);

        }
    });
}

async function res() {
    let result = await allTask();
    Object.keys(result).forEach(key => {
        console.log('Key:', key, 'Value:', result[key]);
    });
}
// res();
export {allTask}




import * as database from './databaseController.js';

export { Task };

class Task {
    constructor(taskDetail, isCompleted) {
        this.taskDetail = taskDetail;
        this.isCompleted = isCompleted;
    }

}
// let taskDetail = "Have a coffee!";
// let isCompleted = false;
async function useAddTask(taskDetail) {
    const task = new Task(taskDetail);
    await database.addTask(task).then(async (response) => {
        let responseData = await response.json()
        console.log("Created:\n ", responseData);
    })
        .catch(error => { console.log(error) })
}
async function useAllTaskData() {
    let res = await database.getAllTaskFromDatabase().catch(error => {
        console.log(error);
    });
    return res[0];
}
async function useTaskById(id) {
    let res = await database.getTasksByTaskId(id)
        .catch(error => console.error(error))

    return res;
}

async function useDeleteById() {
    let response = await database.deleteTask(3)
        .catch(error => console.log(error))
    if (response.status === 200) {
        console.log("success");
    } else {
        console.log("task not found");
    }
}

async function useUpdateStatus(id) {
    let response = await database.updateStatus(id).catch(error => console.log(error));
    if (response.status === 200) {
        console.log("successfully updated the status of task to completed");
    }
}
const keys = ['id', 'isCompleted', 'taskDetail'];

async function returnTask() {
    let taskMap = await useAllTaskData();
    keys.forEach(id => {
        for (const id in taskMap) {
            console.log(taskMap);

        }
    });
}

async function res() {
    let result = await useAllTaskData();
    Object.keys(result).forEach(key => {
        console.log('Key:', key, 'Value:', result[key]);
    });
}

res();





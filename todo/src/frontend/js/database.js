import { Todo } from "./Todo.js";
const endpoint = 'http://localhost:8080';


let fetchDataMap = new Map();
// let taskDetail = [], isCompleted = [];
async function getAllTaskFromDatabase() {
    // const url = `${endpoint}/allTask`;
    const url = endpoint + '/allTask';
    let response = await fetch(url);
    if (checkResponseCode(response.status)) {
        let data = await response.json();
        data.forEach(element => {
            const todo = new Todo(element['taskDetail'], element['isCompleted']);
            // taskDetail.push(element['taskDetail'])
            // isCompleted.push(element['isCompleted'])
            // console.log(element['id'],todo)
            fetchDataMap.set(element['id'], todo);
        })
        // console.log(fetchDataMap);
        return fetchDataMap;
    }
}
async function getTasksByTaskId(id) {
    const url = `${endpoint}/allTask/${id}`;
    let response = await fetch(url);
    if (checkResponseCode(response.status)) {
        let data = await response.json();
        console.log(response.status);
        return data;
    } else if (response.status === 404) {
        console.log("Task not found")
    } else {
        console.error("Something went wrong");
    }
}
async function deleteTask(id) {
    const url = `${endpoint}/allTask/delete/${id}`;
    let response = await fetch(url, {
        method: 'DELETE'
    })
    if ((checkResponseCode(response.status))) {
        return response;
    } else {
        return response;
    }
}

// let task = new Todo("Hello from Javascript",false);

async function addTask(task) {
    const url = `${endpoint}/addTask`;
    const option = {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let response = await fetch(url,option);
    if(response.status === 201){
        console.log("Succesfully created!");
        return response;
    }else{
        console.log("Something went wrong");
        return response;
    }
}

async function updateStatus(id){
    const url = `${endpoint}/updateTask/${id}`
    const completeStatus={'isCompleted':true};
    const option = {
        method :'PATCH',
        body : JSON.stringify(completeStatus),
        headers:{
            'Content-type':'application/json'
        }
    }
    let response = await fetch(url,option);
    if(checkResponseCode(response.status)){
        // console.log("Status is updated to true for task "+id);
        return response;
    }else{
        return response;
    }

}

function checkResponseCode(statusCode) {
    if (Number(statusCode) === 200) {
        return true;
    } else {
        return false;
    }
}
// addTask();
updateStatus(11);
export { deleteTask, getAllTaskFromDatabase, getTasksByTaskId, addTask,updateStatus };

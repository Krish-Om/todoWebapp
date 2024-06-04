import { Todo } from "./Todo.js";
const endpoint = 'http://localhost:8080';


let fetchDataMap = new Map();
async function getAllTaskFromDatabase() {
    // const url = `${endpoint}/allTask`;
    const url = endpoint + '/allTask';
    let response;
    try {
        response = await fetch(url);
        if (!checkResponseCode(response.status)) {
            throw new Error(`Request failed with status code ${response.status}`);
        }
        let data = await response.json();
        data.forEach(element => {
            const todo = new Todo(element['taskDetail'], element['isCompleted']);
            fetchDataMap.set(element['id'], todo);
        })
        return fetchDataMap;
        // console.log(fetchDataMap);
    } catch(error) {
        throw new Error(`Request failed with : ${error.message}}`);
    }
}
async function getTasksByTaskId(id) {
    const url = `${endpoint}/allTask/${id}`;
    let response;
    try {
        response = await fetch(url);
        let data = await response.json();
        console.log(response.status);
        if (!checkResponseCode(response.status)) {
            throw new Error(`Request failed with status code ${response.status}`);
        }
        return data;
    }
    catch(error) {
        throw new Error(`Request failed with: ${error.message}`);
    }
}
async function deleteTask(id) {
    const url = `${endpoint}/allTask/delete/${id}`;
    let response;
    try {
        response = await fetch(url, {method: 'DELETE'})
        if(!checkResponseCode(response.status))
            {
                throw new Error('Request failed');
            }
        return response;
    } catch(error) {
        throw new Error(`Request failed ${error.message}`);

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
    let response;
    try {
        response = await fetch(url, option);
        if(!checkResponseCode(response.status)){
            throw new Error("Request Failed");
        }
        return response;
    } catch (error) {
        throw new Error(`Request failed: ${error.message}`);
    }
}

async function updateStatus(id) {
    const url = `${endpoint}/updateTask/${id}`
    const completeStatus = { 'isCompleted': true };
    const option = {
        method: 'PATCH',
        body: JSON.stringify(completeStatus),
        headers: {
            'Content-type': 'application/json'
        }
    }
    let response;
    try {
        response = await fetch(url, option);
        if(!checkResponseCode(response.status)){
            throw new Error(`Request failed`);
        }
        return response;
    } catch(error) {
        throw new Error(`Request failed: ${error.message}` );
    }
}

function checkResponseCode(statusCode) {
    return statusCode >= 200 && statusCode < 300;
}

// addTask();
getAllTaskFromDatabase();
// updateStatus(3);

export { deleteTask, getAllTaskFromDatabase, getTasksByTaskId, addTask, updateStatus };

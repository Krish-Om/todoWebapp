import { Todo } from "./Todo.js";
const endpoint = 'http://localhost:8080';


let fetchDataMap = new Map();
// let taskDetail = [], isCompleted = [];
async function getAllTaskFromDatabase() {
    // const url = `${endpoint}/allTask`;
    const url = endpoint+'/allTask';
    let response = await fetch(url);
    let data = await response.json();
    data.forEach(element => {
        const todo = new Todo(element['taskDetail'],element['isCompleted']);
        // taskDetail.push(element['taskDetail'])
        // isCompleted.push(element['isCompleted'])
        // console.log(element['id'],todo)
        fetchDataMap.set(element['id'],todo);
    })
        // console.log(fetchDataMap);
    return fetchDataMap;
}
async function getTasksByTaskId(id){
    const url = `${endpoint}/allTask/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

export {getAllTaskFromDatabase,getTasksByTaskId};
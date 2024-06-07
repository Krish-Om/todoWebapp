import { endpoint } from "../config.js";




async function getAllTaskFromDatabase() {
    // const url = `${endpoint}/allTask`;
    const url = endpoint + '/task';
    let response;
    try {
        response = await fetch(url);
        if (!checkResponseCode(response.status)) {
            throw new Error(`Request failed with status code ${response.status}`);
        }
        return response.json();
    } catch (error) {
        throw new Error(`Request failed with : ${error.message}}`);
    }
}
async function getTasksByTaskId(id) {
    const url = `${endpoint}/task/${id}`;
    let response;
    try {
        response = await fetch(url);
        // console.log(response.status);
        if (!checkResponseCode(response.status)) {
            throw new Error(`Request failed with status code ${response.status}`);
        }
        return response.json();
    }
    catch (error) {
        throw new Error(`Request failed with: ${error.message}`);
    }
}

// setTimeout(async()=>{
//     console.log("await")
//     console.log(await  getTasksByTaskId(1));
    
//   },5000)

//   getTasksByTaskId(1).then(res=>{
//     console.log("promise")
//     console.log(res)
//   })

function deleteTask(id) {
    const url = `${endpoint}/task/${id}`;

    return new Promise(async (resolve, reject) => {
        try {
            let response;
            response = await fetch(url, { method: 'DELETE' })
            if (!checkResponseCode(response.status)) {
                reject('Request failed')
            }
            resolve(response)
        } catch (error) {
            reject(`Request failed ${error.message}`)


        }
    })

}

// let task = new TodoImpl("Hello from Javascript",false);

async function addTask(task) {
    const url = `${endpoint}/task`;
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
        if (!checkResponseCode(response.status)) {
            throw new Error("Request Failed");
        }
        return response;
    } catch (error) {
        throw new Error(`Request failed: ${error.message}`);
    }
}

async function updateStatus(id) {
    const url = `${endpoint}/task/${id}`
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
        if (!checkResponseCode(response.status)) {
            throw new Error(`Request failed`);
        }
        return response;
    } catch (error) {
        throw new Error(`Request failed: ${error.message}`);
    }
}

function checkResponseCode(statusCode) {
    return statusCode >= 200 && statusCode < 300;
}
getAllTaskFromDatabase();

export { deleteTask, getAllTaskFromDatabase, getTasksByTaskId, addTask, updateStatus };

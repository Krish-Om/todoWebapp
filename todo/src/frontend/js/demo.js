// // const input = document.querySelector('.usertask')
// // document.querySelector('.btn').addEventListener('click', () => {
// //    const tasklist = document.createElement('p')
// //


// //adding the data from the server
// // document.querySelector('.btn').addEventListener('click', () => {
// //     const taskDescription = document.querySelector('.usertask').value;

// //     fetch('http://localhost:8080/addTask',{
// //        method: "POST",
// //        body: JSON.stringfy({taskDetail: taskDescription})
// //     })
// //     .then(response =>response.json())
// //     .then(data => {
// //         console.log ('Task added succesfully:',data);
// //         //clear input field
// //         input.value = '';
// //         //update task list
// //     })
// //     .catch(error => {
// //         console.error('Error adding task:', error);
// //     });
// // });
// // let taskArray=[];
// const addTaskBtn = document.getElementById("btnAddTask");
// const taskString = document.getElementById("userTask");

// function getTaskArray(){
//     return taskArray;
// }



// function getTaskDataFromDocument() {
//     let taskArray = getTaskArray();
//     let clicks = 0;
//     const task = taskString.value;
//     taskArray[clicks] = task;
//     clicks++;
//     return taskArray;
// }

// function putNewTask(taskData) {
//     let allTaskdocument = document.getElementById('allTasks');

//     const para = document.createElement("li");
//     taskData.forEach(element => {
//         para.innerHTML = element;
//         allTaskdocument.appendChild(para);
//     });
// }
// addTaskBtn.addEventListener("click", () => {
//     if (taskString.value.trim() === "") {
//         console.log("ERROR: empty tasks");
//     } else {
//        const task = getTaskDataFromDocument();
//         putNewTask(task);
//     }
// });

// // setTimeout(getTaskFromDatabase,2000);




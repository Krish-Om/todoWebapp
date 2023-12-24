const input = document.querySelector('.usertask')
document.querySelector('.btn').addEventListener('click', () => {
   const tasklist = document.createElement('p')
});


//adding the data from the server
document.querySelector('.btn').addEventListener('click', () => {
    const taskDescription = document.querySelector('.usertask').value;

    fetch('http://localhost:8080/addTask',{
       method: "POST",
       body: JSON.stringfy({taskDetail: taskDescription})
    })
    .then(response =>response.json())
    .then(data => {
        console.log ('Task added succesfully:',data);
        //clear input field
        input.value = '';
        //update task list
    })
    .catch(error => {
        console.error('Error adding task:', error);
    });
});

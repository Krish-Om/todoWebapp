let taskList = [];

const taskService = new TaskService();
const fetchAll = () => {
  taskService.getAllTasks().then((results) => {
    results.forEach((element) => {
      taskList.push(element);
    });
    displayTaskList(results);
  });
};
const fetchOne = (id) => {
  taskService.getTasksByTaskId(id).then((res) => {
    displayTaskList(res);
  });
};

const destroy = (id) => {
  taskService.deleteTask(id).then((res) => {
    console.log("Deleted succesfully", id);
  });
};

const destroyAll = () => {
  taskService.deleteAll().then((res) => {
    console.log("deleted all");
  });
};

const create = (task) => {
  const newtask = {
    taskDetail: task,
    taskStatus: false,
  };
  taskService.addTask(newtask).then((res) => {
    console.log("created successfully");
  });
};

const update = (id) => {
  taskService
    .updateStatus(id)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("updated succesfully", data);
    });
};

const dayArr = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
];

const updateDay = () => {
  const date = new Date();
  const day = date.getDay();
  document.getElementById("day").innerText = dayArr[day];
};

const timeDisplay = () => {
  const date = new Date();
  let hr = date.getHours();
  let period = "AM";
  if (hr >= 12) {
    hr = hr - 12;
    period = "PM";
  }
  if (hr == 0) {
    hr = 12;
  }

  if (hr < 10) {
    hr = "0" + hr;
  }
  let min = date.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  let sec = date.getSeconds();
  if (sec < 10) {
    sec = "0" + sec;
  }
  document.querySelector(".time").innerText =
    hr + ":" + min + ":" + sec + " " + period;
};

updateDay();
timeDisplay();
setInterval(timeDisplay, 1000);

const handleOnSubmit = (e) => {
  const newForm = new FormData(e);
  const task = newForm.get("task");
  try {
    if (
      task !== null &&
      task !== "" &&
      !task.includes("null") &&
      !task.includes("empty")
    ) {
      const obj = {
        taskDetail: task,
        status: false,
      };
      taskList.push(obj);
      create(task);
      displayTaskList(taskList);
    } else {
      throw new Error("Empty task cannot be added");
    }
  } catch (e) {
    throw new Error(e.message);
  }

  console.log(taskList);
};

const displayTaskList = (results) => {
  let str = "";
  const tableList = document.querySelector(".tableList");

  results.map((item) => {
    str += `
        <tr>
        <td>${item.id}
        <td>${item.taskDetail}</td>
        <td class="text-end">

            <button onclick = handleOnDel("${
              item.id
            }") class="btn btn-danger"><i class="bi bi-trash3"></i></button>
            <button onclick="toggleTaskCompletion('${item.id}')" class="btn ${
      item.isCompleted ? "btn-success" : "btn-primary"
    } mark"><i class="bi bi-check2"></i></button>
        </td>
        </tr>`;
  });
  tableList.innerHTML = str;
};

const handleOnClear = () => {
  if (window.confirm("Are you sure you want to delete all the task?")) {
    taskList = [];

    destroyAll();
    displayTaskList(taskList);
  }
};

const handleOnDel = (id) => {
  if (window.confirm("Are you sure you want to delete?")) {
    taskList = taskList.filter((item) => {
      if (item.id == id) {
        destroy(item.id);
        return false;
      }
      return true;
    });
  }
  console.log(`updated task list: `, taskList);
  displayTaskList(taskList);
};

const toggleTaskCompletion = (id) => {
  taskList = taskList.map((item) => {
    if (item.id == id) {
      update(id);
      console.log(item.id);
      return { ...item, isCompleted: !item.isCompleted };
    }
    return item;
  });
  displayTaskList(taskList);
};

const randomIdGenerator = () => {
  const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
  let id = "";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * str.length);
    id += str[index];
  }
  return id;
};
(function () {
  fetchAll();
})();

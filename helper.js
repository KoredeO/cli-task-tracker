const { p, u } = require("framer-motion/client");
const fs = require("fs");
const path = require("path");

const storagePath = path.join(__dirname, "storage.json");

const taskDescription = process.argv[2];
const addTask = (value) => {
  const data = loadData();
  let id;
  length = data.tasks.length;
  if (length == 0) {
    id = 1;
  } else {
    id = data.tasks[length - 1].id + 1;
  }
  const task = {
    id: id,
    description: value,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  data.tasks.push(task);
  fs.writeFileSync(storagePath, JSON.stringify(data, null, 2));
  console.log("Task added successfully (ID: " + id + ")");
};
const loadData = () => {
  if (!fs.existsSync(storagePath)) {
    fs.writeFileSync(storagePath, JSON.stringify({ tasks: [] }));
  }
  return JSON.parse(fs.readFileSync(storagePath, "utf-8"));
};

const deleteTask = (id) => {
  const num = parseInt(id);
  if (!num) {
    console.log("Error: Invalid ID provided. Need help? Use the \"tracker --help\" command");
    return;
  }
  const data = loadData();
  const index = data.tasks.findIndex((task) => task.id == id);
  if (index >= 0) {
    data.tasks.splice(index, 1);
    fs.writeFileSync(storagePath, JSON.stringify(data));
    console.log("Task deleted successfully");
  } else console.log("Error: Task not found. You can use the command \"tracker list\" to see all the tasks.");
};

const updateTask = (id, text) => {
  const num = parseInt(id);
  if (!num) {
    console.log(
      "Error: Invalid ID provided. The id should come before the text. Need help? Use the \"tracker --help\" command"
    );
    return;
  }
  const data = loadData();
  const taskToUpdate = data.tasks.filter((task) => task.id == id);

  if (taskToUpdate.length == 0) {
    console.log("Error: Task not found. You can use the command \"tracker list\" to see all the tasks.");
    return;
  }

  taskToUpdate[0].description = text;
  taskToUpdate[0].updatedAt = new Date();
  fs.writeFileSync(storagePath, JSON.stringify(data));
  console.log("Task updated successfully");
};
const updateStatus = (id, status) => {
  const data = loadData();

  const num = parseInt(id);
  if(!num){
    console.log("Error: Invalid ID provided. Need help? Use the \"tracker --help\" command");
    return
  }

  const taskToUpdate = data.tasks.filter((task) => task.id == id);

  if (taskToUpdate.length == 0) {
    console.log("Error: Task not found. You can use the command \"tracker list\" to see all the tasks.");
    return;
  }

  taskToUpdate[0].status = status;
  taskToUpdate[0].updatedAt = new Date();
  fs.writeFileSync(storagePath, JSON.stringify(data));
  console.log(`Task successfully updated to ${status}`);
};

const listTasks = (status) => {
  const data = loadData();
  if (!status) {
    const tasks = data.tasks.map(
      (task, i) => `${task.id}. ${task.description} - ${task.status}`
    );

    tasks.forEach((task) => console.log(task));
  } else {
    if(status != "todo" && status != "in-progress" && status != "done"){
      console.log("Error: Invalid status provided. Status must either be 'todo', 'in-progress' or 'done'. Need help? Use the \"tracker --help\" command");
    }

    const tasks = data.tasks
      .filter((task) => task.status == status)
      .map((task, i) => `${task.id}. ${task.description} - ${task.status}`);

    if(tasks.length == 0){
      console.log(`No tasks found with the status of ${status}`);
      return
    }
    tasks.forEach((task) => console.log(task));
  }
};

module.exports = {
  addTask,
  deleteTask,
  updateTask,
  updateStatus,
  listTasks,
};

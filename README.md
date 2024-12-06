# CLI task tracker
 
This application helps users track asks to be done like a todo list.

Sample solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge from roadmap.sh

## Features:
- Add new tasks.
- Mark tasks as done or in progress or incomplete.
- Edit existing tasks.
- Delete tasks you no longer need.
- View tasks 

## Valid Commands:
    tracker add <task name >
    tracker list <status>
    tracker delete <id>
    tracker update <id> <new task name >
    tracker mark-in-progress <id>
    tracker mark-done <id>

##  Example:
    tracker add Buy groceries will add a task  Buy groceries
    tracker list will list all the tasks
    tracker update 2 Buy more groceries will update the task with id 2 to Buy more groceries
    tracker mark-in-progress 2 will mark the task with id 2 as in-progress
    tracker mark-done 2 will mark the task with id 2 as done
    tracker delete 2 will delete the task with id 2
 ## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/KoredeO/cli-task-tracker

 ## Project URL
https://github.com/KoredeO/cli-task-tracker
   

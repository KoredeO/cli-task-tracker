#!/usr/bin/env node

//  #!/usr/bin/env node (#bang) tells the OS the interpreter to use

const helper = require("./helper.js");

const helpText = `Valid Commands:
    tracker add <task name >
    tracker list <status>
    tracker delete <id>
    tracker update <id> <new task name >
    tracker mark-in-progress <id>
    tracker mark-done <id>
----------------------------------------------------------------------------------------------------------------------------------

    ID: a number that will be used to identify the task you will be given the id when the task is added or then you list the tasks.
    task name : the name of the task you want to add.
    Status:The statuses allowed are : todo,in-progress, done
-----------------------------------------------------------------------------------------------------------------------------------
    Example:
    tracker add Buy groceries will add a task  Buy groceries
    tracker list will list all the tasks
    tracker update 2 Buy more groceries will update the task with id 2 to Buy more groceries
    tracker mark-in-progress 2 will mark the task with id 2 as in-progress
    tracker mark-done 2 will mark the task with id 2 as done
    tracker delete 2 will delete the task with id 2
    `
if(process.argv.length >2){
    switch (process.argv[2]) {
        case "add":
            if(process.argv[3]){
                helper.addTask(process.argv[3]);
            }
            else console.log("Error: You need to provide the name of the task. Need help? Use the \"tracker --help\" command");
            break;
        
        case "list":
            helper.listTasks(process.argv[3]);
            break;
        
        case "delete":
            if(process.argv[3]){
                helper.deleteTask(process.argv[3]);
            }
            else console.log("Error: You need to provide an ID to delete. Need help? Use the \"tracker --help\" command");
            break;
        
        case "update":
            if(process.argv[3] && process.argv[4]){
                helper.updateTask(process.argv[3], process.argv[4]);
            }
            else console.log("Error: You need to provide an ID to update and the text to update. Need help? Use the \"tracker --help\" command");
            break;
        
        case "mark-in-progress":
            if(process.argv[3]){
                helper.updateStatus(process.argv[3], "in-progress");
            }
            else console.log(`Error: You need to provide an ID to update. Need help? Use the "tracker --help" command`);
            break;
        
        case "mark-done":
            if(process.argv[3]){
                helper.updateStatus(process.argv[3], "done");
            }
            else console.log(`Error: You need to provide an ID to update. Need help? Use the "tracker --help" command`);
            break;
         
        case "--help":
            console.log(helpText);    
        
        default:
            console.log(`Invalid command you can use the "tracker --help" command to see the list of available commands`);
            break;   
        
    }
}
else {console.log(`
    Welcome to the CLI Tracking App :).
---------------------------------------------------------------------------------------
    This app will help you keep track of your tasks.
   `, helpText)}

const mongoose = require('mongoose');
const process = require('process');
const command = process.argv[2];

// - Establish a database connection
// - Create a schema
// - Create our model

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

// Name of the collection is 'todo_list' and schema is todoSchema and model is 'todo'
const TodoModel = mongoose.model('todo', todoSchema, "todo_list");

async function addToDo(task) {
    const newTodo = new TodoModel({
        task: task,
    });
    await newTodo.save();
    console.log(`Added to-do: "${task}"`);
}

async function showToDos() {
}

async function completeToDo(id) {
}

async function deleteToDo(id) {
}

async function main() {
    switch (command) {
        case 'add': {
            const task = process.argv[3];
            if (!task) {
                console.log('Usage: node index.js add <task>');
                break;
            }
            await addToDo(task);
            break;
        }

        case 'show': {
            await showToDos();
            break;
        }

        case 'complete': {
            const id = process.argv[3];
            if (!id) {
                console.log('Usage: node index.js complete <id>');
                break;
            }
            await completeToDo(id);
            break;
        }

        case 'delete': {
            const id = process.argv[3];
            if (!id) {
                console.log('Usage: node index.js delete <id>');
                break;
            }
            await deleteToDo(id);
            break;
        }

        default:
            console.log('Usage: node index.js <command> [arguments]');
            console.log('Commands: add, show, complete, delete');
    }

    mongoose.connection.close();
}

mongoose.connect('mongodb://localhost:27017/keyinClassDB')
    .then(() => main())
    .catch((error) => {
        console.error(error);
        mongoose.connection.close();
    });

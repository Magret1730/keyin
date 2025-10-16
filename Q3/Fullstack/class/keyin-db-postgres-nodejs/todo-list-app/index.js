const { Pool } = require('pg');

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres', //This _should_ be your username, as it's the default one Postgres uses
  host: 'localhost',
  database: 'keyin2db', //This should be changed to reflect your actual database
  password: 'qigwu0-G', //This should be changed to reflect the password you used when setting up Postgres
  port: 5433,
});

/**
 * Creates the to do list table, if it does not already exist
 */
async function createTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      task TEXT NOT NULL,
      completed BOOLEAN DEFAULT FALSE
    )`;

  try {
    await pool.query(query);
    console.log("Table todos created or already existed.")
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

/**
 * Adds a new todo list item
 * 
 * @param {string} task - The item to add
 */
async function addTodo(task) {
  const query = `INSERT INTO todos (task) VALUES ($1) RETURNING *`;
  
  try {
    const response = await pool.query(query, [task]);
    console.log(`Inserted item: ${task}`);
    console.log(response.rows[0].task);
  } catch (err) {
    console.error('Error inserting item:', err);
  }
};

/**
 * Prints all todo list items to the console
 */
async function showTodos() {
  const query = `SELECT * FROM todos ORDER BY id ASC`;

  try {
    const results = await pool.query(query);

    if (results.rowCount < 1) {
      console.log("No items found.");
      return;
    }

    console.log("Todo List Items:");
    results.rows.forEach(row => console.log(`ID: ${row.id}, Task: ${row.task}, Completed: ${row.completed}`));

    // results.rows.forEach(row => {
    //   console.log(`Items in the table are ${row.id}: ${row.name}`);
    // });

    // if (results.rows.length === 0) {
    //   console.log("No items found.");
    // }
  } catch (err) {
    console.error('Error retrieving items:', err);
  }
};

/**
 * Marks the specified todo list item as completed
 * 
 * @param {number} id - The ID of the todo list item
 */
async function completeTodo(id) {
  const query = `UPDATE todos SET completed = TRUE WHERE id = $1 RETURNING *`;

  try {
    const response = await pool.query(query, [id]);
    if (response.rowCount === 0) {
      console.log(`No item found with ID: ${id}`);
    } else {
      console.log(`Marked item with ID: ${id} as completed.`);
    }
  } catch (err) {
    console.error('Error updating item:', err);
  }
};

/**
 * Deletes the specified todo list item
 * 
 * @param {number} id - The ID of the todo list item
 */
async function deleteTodo(id) {
  const query = `DELETE FROM todos WHERE id = $1 RETURNING *`;

  try {
    const response = await pool.query(query, [id]);
    if (response.rowCount < 1) {
      console.log(`No task found with ID: ${id}`);
    } else {
      console.log(`Deleted task with ID: ${id}.`);
      console.log(`Deleted task "${response.rows[0].task}" with ${response.rows[0].id}`);
    }
  } catch (err) {
    console.error('Error deleting task:', err);
  }
};

/**
 * Removes all todo list items that have been completed
 */
async function clearCompleted() {
  const query = `DELETE FROM todos WHERE completed = TRUE RETURNING *`;

  try {
    const response = await pool.query(query);
    console.log(`Cleared ${response.rowCount} completed task(s).`);
  } catch (err) {
    console.error('Error clearing completed tasks:', err);
  }
};

/**
 * Runs our CLI app to manage the todo list
 */
async function runCLI() {
  await createTable();
  const args = process.argv.slice(2);

  switch (args[0]) {
    case 'add':
      const task = args.slice(1).join(' ');
      await addTodo(task);
      break;
    case 'show':
      await showTodos();
      break;
    case 'complete':
      const completeId = parseInt(args[1], 10);
      await completeTodo(completeId);
      break;
    case 'delete':
      const deleteId = parseInt(args[1], 10);
      await deleteTodo(deleteId);
      break;
    case 'clear':
      await clearCompleted();
      break;
    default:
      console.log('Invalid command. Use add, show, complete, delete, or clear.');
  }

  // Close the database connection
  await pool.end();
};

runCLI()
  .catch((error) => {
    console.error('Error executing query', error.stack);
    return pool.end();
  });
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'qigwu0-G',
  host: 'localhost',
  database: 'keyin2db',
  port: 5433,
});

/**
 * Creates the database table, if it does not already exist.
 */
async function createTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS items (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
  );
  `;

  try {
    await pool.query(query);
    console.log("Table created or already existed.")
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

/**
 * Inserts a new item into the table
 * 
 * @param {string} itemName Name of the item being added
 */
async function insertItem(itemName) {
  const query = {
    text: "INSERT INTO items (name) VALUES ($1)",
    values: [itemName],
  };

  try {
    await pool.query(query);
    console.log(`Inserted item: ${itemName}`);
  } catch (err) {
    console.error('Error inserting item:', err);
  }
};

/**
 * Prints all items in the database to the console
 */
async function displayItems() {
  const query = "SELECT * FROM items";

  try {
    const results = await pool.query(query);

    results.rows.forEach(row => {
      console.log(`Items in the table are ${row.id}: ${row.name}`);
    });

    if (results.rows.length === 0) {
      console.log("No items found.");
    }
  } catch (err) {
    console.error('Error retrieving items:', err);
  }
};

/**
 * Prints a help message to the console
 */
function printHelp() {
  console.log('Usage:');
  console.log('  insert <item_name> - Insert an item');
  console.log('  show - Show all items');
}

/**
 * Runs our CLI app to manage the items database
 */
async function runCLI() {
  // await createTable();

  const args = process.argv.slice(2);
  switch (args[0]) {
    case 'insert':
      if (!args[1]) {
        printHelp();
        return;
      }

      await createTable();
      await insertItem(args[1]);
      break;
    case 'show':
      await displayItems();
      break;
    default:
      printHelp();
      break;
  }

  pool.end();
};

runCLI();
const mongoose = require('mongoose');
const process = require('process');
const command = process.argv[2];

// - Establish a database connection
// - Create a schema
// - Create our model

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

// Name of the collection is 'items' and schema is itemSchema
const ItemModel = mongoose.model('Item', itemSchema);

async function insertItem(itemName) {
    const newItem = new ItemModel({name: itemName});
    await newItem.save();
    console.log(`Inserted item: "${itemName}`)
}

async function showItems() {
    const items = await ItemModel.find();
    if (items.length === 0) {
        console.log('No items found.');
        return;
    } else {
        console.log("Items in the collection: ");
        items.forEach((item, index) => {
            console.log(`${index}  ${item._id}: "${item.name}"`);
        })
    }
}

async function main() {
    switch (command) {
        case 'insert': {
            const itemName = process.argv[3];
            if (!itemName) {
                console.log('Usage: node index.js insert <item_name>');
                break;
            }
            await insertItem(itemName);
            break;
        }

        case 'show': {
            await showItems();
            break;
        }

        default:
            console.log('Usage: node index.js <command> [arguments]');
            console.log('Commands: insert, show');
    }
    mongoose.connection.close();
}

mongoose.connect('mongodb://localhost:27017/keyinClassDB')
    .then(() => main())
    .catch((error) => {
    console.error(error);
    mongoose.connection.close();
});

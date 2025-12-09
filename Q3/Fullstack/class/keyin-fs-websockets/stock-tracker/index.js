const express = require('express');
const expressWs = require('express-ws');
const path = require('path');

const app = express();
expressWs(app); // Enable WebSocket support

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const clientSockets = [];
const stockPrices = {
    AAPL: 150,
    TSLA: 800,
    MSFT: 300,
};

// Route to render the main page
app.get('/', (request, response) => {
    response.render('index', { stocks: Object.keys(stockPrices) });
});

// WebSocket route for stock updates
app.ws('/stocks', (socket) => {
    //[x] Handle incoming websocket connection
    //[x] Handle sending the stock prices to each connected socket
    //[ ] Handle recieving data from a socket, add a new stock to track
    //[x] Handle disconnecting of a client

    clientSockets.push(socket);
    console.log(`We currently have ${clientSockets.length} clients connected.`)

    sendMessage(socket, 'price_update', stockPrices);

    socket.addEventListener('close', (event) => {
        const socketIndex = clientSockets.indexOf(socket);
        if (socketIndex > -1) {
            clientSockets.splice(socketIndex, 1);
        }
    });

    socket.addEventListener('message', (event) => {
        const parsedEvent = JSON.parse(event.data);
        switch (parsedEvent.event) {
            case 'new_stock':
                const stockTicker = parsedEvent.data.stockTicker;
                if (!stockPrices[stockTicker]) {
                    stockPrices[stockTicker] = Math.random() * 100;
                }

                clientSockets.forEach((socket) =>  sendMessage(socket, 'stock_added', { newStockTicker: stockTicker }));
                break;
        }
        
    });
});

// Update stock prices periodically
setInterval(() => {
    Object.keys(stockPrices).forEach((stock) => {
        stockPrices[stock] += (Math.random() - 0.5) * 10;
    });

    clientSockets.forEach((socket) => sendMessage(socket, 'price_update', stockPrices));
}, 2000);

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

function sendMessage(socket, eventName, messageData) {
    socket.send(
        JSON.stringify(
            {
                event: eventName,
                data: messageData,
            }
        )
    )
}



// const express = require('express');
// const expressWs = require('express-ws');
// const path = require('path');

// const app = express();
// expressWs(app); // Enable WebSocket support

// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));

// const clientSockets = [];
// const stockPrices = {
//     AAPL: 150,
//     TSLA: 800,
//     MSFT: 300,
// };

// // Route to render the main page
// app.get('/', (request, response) => {
//     response.render('index', { stocks: Object.keys(stockPrices) });
// });

// // WebSocket route for stock updates
// app.ws('/stocks', (socket) => {
//     //[x] Handle incoming websocket connection
//     //[x] Handle sending the stock prices to each connected socket
//     //[ ] Handle recieving data from a socket, add a new stock to track
//     //[x] Handle disconnecting of a client

//     clientSockets.push(socket);
//     console.log(`We currently have ${clientSockets.length} clients connected.`)

//     sendMessage(socket, 'price_update', stockPrices);

//     socket.addEventListener('close', (event) => {
//         const socketIndex = clientSockets.indexOf(socket);
//         if (socketIndex > -1) {
//             clientSockets.splice(socketIndex, 1);
//         }
//     });

//     socket.addEventListener('message', (event) => {
//         const newStockData = JSON.parse(event.data);
//         if (!stockPrices[newStockData.stockTicker]) {
//             stockPrices[newStockData.stockTicker] = Math.random() * 100;
//         }

//         clientSockets.forEach((socket) =>  sendMessage(socket, 'stock_added', { newStockTicker: newStockData.stockTicker }));
//     });
// });

// // Update stock prices periodically
// setInterval(() => {
//     Object.keys(stockPrices).forEach((stock) => {
//         stockPrices[stock] += (Math.random() - 0.5) * 10;
//     });

//     clientSockets.forEach((socket) => sendMessage(socket, 'price_update', stockPrices));
// }, 2000);

// // Start server
// app.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// });

// function sendMessage(socket, eventName, messageData) {
//     socket.send(
//         JSON.stringify(
//             {
//                 event: eventName,
//                 data: messageData,
//             }
//         )
//     )
// }


// const express = require('express');
// const expressWs = require('express-ws');
// const path = require('path');

// const app = express();
// expressWs(app); // Enable WebSocket support

// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));

// const clientSockets = [];
// const stockPrices = {
//     AAPL: 150,
//     TSLA: 800,
//     MSFT: 300,
// };


// // Route to render the main page
// app.get('/', (request, response) => {
//     response.render('index', { stocks: Object.keys(stockPrices) });
// });

// // WebSocket route for stock updates
// app.ws('/stocks', (socket) => {
//     // Handle incoming websocket connection
//     // Handle sending the stock proces to each connected socket
//     // Handle receiving data from a socket, aka a new stock to track
//     // Handle disconnecting of a client

//     // console.log("Incoming Web socket Connection");
//     clientSockets.push(socket);
//     console.log(`We currently have: ${clientSockets.length} clients connected`);

//     // socket.send('Hello!');

//     socket.send(
//         JSON.stringify(
//             {
//                 event: "price_update",
//                 stockPrices
//             }
//         )
//     );

//     socket.on('close', (event) => {
//         const socketIndex = clientSockets.indexOf(socket);
//         if (socketIndex > -1) {
//             clientSockets.splice(socketIndex, 1);
//         }
//     });

//     socket.addEventListener('message', (event) => {
//         // console.log(event.data);
//         const newStockData = JSON.parse(event.data);
//         if (!stockPrices[newStockData.stockTicker]) {
//             stockPrices[newStockData.stockTicker] = Math.random() * 100;
//         }

//         // console.log(stockPrices);
//         clientSockets.forEach((socket) => socket.send(
//             JSON.stringify(
//                 {
//                     event: 'stock_added',
//                     newStockTicker: newStockData.stockTicker
//                 }
//             )
//         ));
//     })
// });

// // Update stock prices periodically
// setInterval(() => {
//     Object.keys(stockPrices).forEach((stock) => {
//         stockPrices[stock] += (Math.random() - 0.5) * 10;
//     });

//     // clientSockets.forEach((socket) => socket.send(JSON.stringify(stockPrices)));
//     clientSockets.forEach((socket) => sendMessage(socket, 'price_update', stockPrices));
// }, 2000);

// // Start server
// app.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// });

// function sendMessage(socket, eventName, messageData) {
//     socket.send(
//         JSON.stringify(
//             {
//                 event: eventName,
//                 data: messageData,
//             }
//         )
//     )
// }

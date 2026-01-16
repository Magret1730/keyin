//[x] Connect socket
//[x] Add event listener to listen for new socket messages
//[ ] Add event listener to handle sending the form data via the socket.

const socket = new WebSocket('ws://localhost:3000/stocks');
const stockSubmissionForm = document.querySelector("#stock-form");

socket.addEventListener('message', (event) => {
    const parsedEventData = JSON.parse(event.data);

    switch (parsedEventData.event) {
        case 'price_update':
            Object.keys(parsedEventData.data).forEach((stockTicker) => {
                const stockPrice = parsedEventData.data[stockTicker];
                const stockPriceElement = document.querySelector(`#stocks li#${stockTicker} span`);
                stockPriceElement.textContent = `$${stockPrice.toFixed(2)}`;
            });
            break;
        case 'stock_added':
            const stockTicker = parsedEventData.data.newStockTicker;
            const stockList = document.querySelector('#stocks');
            let stockElement = stockList.querySelector(`li#${stockTicker}`);
            if (!stockElement) {
                stockElement = document.createElement('li');
                stockElement.id = stockTicker;
                stockElement.innerHTML = `${stockTicker}: <span>Loading...</span>`;
                stockList.appendChild(stockElement);
            }
            break;
    }
});

stockSubmissionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const stockInput = document.querySelector("#stock");
    const stockTicker = stockInput.value.trim().toUpperCase();
    stockInput.value = '';

    socket.send(JSON.stringify({stockTicker: stockTicker}));
});





// // Connect socket
// // Add event listener to listen for new socket messages
// // Add event listener to handle sending the form data via the socket.

// const socket = new WebSocket('ws://localhost:3000/stocks');
// const stockSubmissionForm = document.querySelector("#stock-form");

// socket.addEventListener('message', (event) => {
//     const parsedEventData = JSON.parse(event.data);


//     switch (parsedEventData.event) {
//         case 'price_update':
//             Object.keys(parsedEventData).forEach((stockTicker) => {
//                 const stockPrice = parsedEventData.data[stockTicker];
//                 const stockPriceElement = document.querySelector(`#stocks li#${stockTicker} span`);
//                 stockPriceElement.textContent = `$${stockPrice.toFixed(2)}`;
//             });
//             break;
//         case 'stock_added':
//             const stockTicker = parsedEventData.data.newStockTicker;
//             const stockList = document.querySelector('#stocks');
//             let stockElement = stockList.querySelector(`li#${stockTicker}`);
//             if (!stockElement) {
//                 stockElement = document.createElement('li');
//                 stockElement.id = stockTicker;
//                 stockElement.innerHTML = `${stockTicker}: <span>loading...</span>`;
//                 stockList.appendChild(stockElement);
//             }
//             break;
//     }
// });

// stockSubmissionForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const stockInput = document.querySelector("#stock");
//     // const stockTicker = stockInput.value.trim().toUpper();
//     const stockTicker = stockInput.value.trim();
//     stockInput.value = '';

//     socket.send(JSON.stringify({stockTicker: stockTicker}));
// })
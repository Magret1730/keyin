// Connect socket
// Add event listener to listen for new socket messages
// Add event listener to handle sending the form data via the socket.

const socket = new WebSocket('ws://localhost:3000/stocks');

socket.addEventListener('message', (event) => {
    // console.log(event.data);
    const incomingStockPrices = JSON.parse(event.data);
    Object.keys(incomingStockPrices).forEach((stockTicker) => {
        const stockPrice = incomingStockPrices[stockTicker];
        const stockPriceElement = document.querySelector(`#stocks li#${stockTicker} span`);
        stockPriceElement.textContent = `$${stockPrice.toFixed(2)}`;
    })

    // Iterate over the stocks we get from the server
    // Find them on the page
    // Replace their "price" text with the current price we obtain from the server
});
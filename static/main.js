function sendMoves(board, websocket) {
    board.addEventListener("click", ({ target }) => {
      const event = {
        type: "play",
        column: parseInt(10),
      };
      websocket.send(JSON.stringify(event));
    });
  }

  window.addEventListener("DOMContentLoaded", () => {

    const board = document.querySelector(".board");
    
    const websocket = new WebSocket("ws://localhost:8001/");
    sendMoves(board, websocket);
  });
import React from "react";

export default function Board() {
  return (
    <div className="board">
      <div className="you">
        <p>
          Player 1 : <span id="you">0</span>
        </p>
        <div>
          <span id="your-cards"></span>
        </div>
      </div>
      <div className="dealer">
        <p>
          Player 2 : <span id="dealer">0</span>
        </p>
        <div>
          <span id="dealer-cards"></span>
        </div>
      </div>
    </div>
  );
}

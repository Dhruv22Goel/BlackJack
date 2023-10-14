import React from "react";
export default function Table() {
  return (
    <div className="table">
      <table>
        <tbody>
          <tr className="table-row">
            <th>Player 1</th>
            <th>Computer</th>
            <th>Draw</th>
          </tr>
          <tr className="table-row">
            <td id="p1">0</td>
            <td id="p2">0</td>
            <td id="draw">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

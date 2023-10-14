import React from "react";
import Board from "../components/Board.jsx";
import Button from "../components/Buttons.jsx";
import Table from "../components/Table.jsx";
export default function Home() {
  var name = document.getElementById("Name");
  console.log(name);
  return (
    <div className="container">
      <h4>BLACK JACK</h4>
      <Board />
      <Button />
      <Table />
    </div>
  );
}

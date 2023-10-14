import React from "react";
const SUITES = ["❤", "♤", "🔶", "♧"];
const CARDS = [
  "Ace",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King"
];
var sum1 = 0;
var sum2 = 0;
var count1 = null;
var count2 = null;
var arr1 = [];
var arr2 = [];
var p1 = null;
var p2 = null;
var draw = null;

export default function Buttons() {
  return (
    <div className="buttons">
      <button
        className="btn btn-primary"
        id="show"
        onClick={() => {
          count1++;

          var suite1 = Math.floor(Math.random() * 4);
          var card1 = Math.floor(Math.random() * 13);

          arr1[count1] = CARDS[card1] + " of " + SUITES[suite1];
          const withoutCommas1 = arr1.join(" ");

          document.getElementById("your-cards").innerText = withoutCommas1;

          sum1 = sum1 + card1 + 1;

          document.getElementById("you").innerText = sum1;

          if (sum1 > 21) {
            document.getElementById("you").innerText = "Burst";
          }
        }}
      >
        PLAYER 1
      </button>
      <button
        className="btn btn-danger"
        id="show"
        onClick={() => {
          while (sum2 < 20) {
            count2++;

            var suite2 = Math.floor(Math.random() * 4);
            var card2 = Math.floor(Math.random() * 13);

            arr2[count2] = CARDS[card2] + " of " + SUITES[suite2];
            const withoutCommas2 = arr2.join(" ");

            document.getElementById("dealer-cards").innerText = withoutCommas2;

            sum2 = sum2 + card2 + 1;

            document.getElementById("dealer").innerText = sum2;

            if (sum2 > 21) {
              document.getElementById("dealer").innerText = "Burst";
            }
          }
        }}
      >
        COMPUTER
      </button>
      <button
        className="btn btn-info"
        id="deal"
        onClick={() => {
          if (sum1 > sum2 && sum1 <= 21 && sum2 <= 21) {
            p1++;
            document.getElementById("p1").innerText = p1;
          } else if (sum2 > sum1 && sum1 <= 21 && sum2 <= 21) {
            p2++;
            document.getElementById("p2").innerText = p2;
          } else if (sum2 > 21 && sum1 <= 21) {
            p1++;
            document.getElementById("p1").innerText = p1;
          } else if (sum1 > 21 && sum2 <= 21) {
            p2++;
            document.getElementById("p2").innerText = p2;
          } else if (sum1 === sum2) {
            draw++;
            document.getElementById("draw").innerText = draw;
          } else if (sum1 > 21 && sum2 > 21) {
            draw++;
            document.getElementById("draw").innerText = draw;
          }
          sum1 = 0;
          document.getElementById("you").innerText = 0;
          sum2 = 0;
          document.getElementById("dealer").innerText = 0;
          count1 = 0;
          count2 = 0;
          arr1 = [];
          document.getElementById("your-cards").innerText = "";
          arr2 = [];
          document.getElementById("dealer-cards").innerText = "";
        }}
      >
        DEAL
      </button>
    </div>
  );
}

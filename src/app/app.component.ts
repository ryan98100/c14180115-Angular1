import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  giliran: boolean = true;
  X = 0;
  Y = 0;
  Player = "";
  board = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];
  reset(){
    this.board = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];
  }
  click() {
      if (this.giliran) {
        if (this.board[this.X][this.Y] == "*") {
          this.board[this.X][this.Y] = "0";
          this.giliran = false;
        } else {
          alert("Sudah diisi musuh!");
        }
      } else {
        if (this.board[this.X][this.Y] == "*") {
          this.board[this.X][this.Y] = "1";
          this.giliran = true;
        } else {
          alert("Sudah diisi musuh!");
        }
      }
       if (
            this.board[0][0] == "0" &&
            this.board[0][1] == "0" &&
            this.board[0][2] == "0" &&
            this.board[0][3] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[0][1] == "0" &&
            this.board[0][2] == "0" &&
            this.board[0][3] == "0" &&
            this.board[0][4] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[1][0] == "0" &&
            this.board[1][1] == "0" &&
            this.board[1][2] == "0" &&
            this.board[1][3] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[1][1] == "0" &&
            this.board[1][2] == "0" &&
            this.board[1][3] == "0" &&
            this.board[1][4] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[2][0] == "0" &&
            this.board[2][1] == "0" &&
            this.board[2][2] == "0" &&
            this.board[2][3] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[2][1] == "0" &&
            this.board[2][2] == "0" &&
            this.board[2][3] == "0" &&
            this.board[2][4] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[3][0] == "0" &&
            this.board[3][1] == "0" &&
            this.board[3][2] == "0" &&
            this.board[3][3] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[3][1] == "0" &&
            this.board[3][2] == "0" &&
            this.board[3][3] == "0" &&
            this.board[3][4] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[4][0] == "0" &&
            this.board[4][1] == "0" &&
            this.board[4][2] == "0" &&
            this.board[4][3] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[4][1] == "0" &&
            this.board[4][2] == "0" &&
            this.board[4][3] == "0" &&
            this.board[4][4] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[0][0] == "0" &&
            this.board[1][0] == "0" &&
            this.board[2][0] == "0" &&
            this.board[3][0] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[1][0] == "0" &&
            this.board[2][0] == "0" &&
            this.board[3][0] == "0" &&
            this.board[4][0] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[0][1] == "0" &&
            this.board[1][1] == "0" &&
            this.board[2][1] == "0" &&
            this.board[3][1] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[1][1] == "0" &&
            this.board[2][1] == "0" &&
            this.board[3][1] == "0" &&
            this.board[4][1] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[0][2] == "0" &&
            this.board[1][2] == "0" &&
            this.board[2][2] == "0" &&
            this.board[3][2] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[1][2] == "0" &&
            this.board[2][2] == "0" &&
            this.board[3][2] == "0" &&
            this.board[4][2] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[0][3] == "0" &&
            this.board[1][3] == "0" &&
            this.board[2][3] == "0" &&
            this.board[3][3] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[1][3] == "0" &&
            this.board[2][3] == "0" &&
            this.board[3][3] == "0" &&
            this.board[4][3] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[0][4] == "0" &&
            this.board[1][4] == "0" &&
            this.board[2][4] == "0" &&
            this.board[3][4] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[1][4] == "0" &&
            this.board[2][4] == "0" &&
            this.board[3][4] == "0" &&
            this.board[4][4] == "0"
          ) {
            alert("PLayer 1 win!");
          } else if (
            this.board[0][0] == "1" &&
            this.board[0][1] == "1" &&
            this.board[0][2] == "1" &&
            this.board[0][3] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[0][1] == "1" &&
            this.board[0][2] == "1" &&
            this.board[0][3] == "1" &&
            this.board[0][4] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[1][0] == "1" &&
            this.board[1][1] == "1" &&
            this.board[1][2] == "1" &&
            this.board[1][3] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[1][1] == "1" &&
            this.board[1][2] == "1" &&
            this.board[1][3] == "1" &&
            this.board[1][4] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[2][0] == "1" &&
            this.board[2][1] == "1" &&
            this.board[2][2] == "1" &&
            this.board[2][3] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[2][1] == "1" &&
            this.board[2][2] == "1" &&
            this.board[2][3] == "1" &&
            this.board[2][4] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[3][0] == "1" &&
            this.board[3][1] == "1" &&
            this.board[3][2] == "1" &&
            this.board[3][3] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[3][1] == "1" &&
            this.board[3][2] == "1" &&
            this.board[3][3] == "1" &&
            this.board[3][4] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[4][0] == "1" &&
            this.board[4][1] == "1" &&
            this.board[4][2] == "1" &&
            this.board[4][3] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[4][1] == "1" &&
            this.board[4][2] == "1" &&
            this.board[4][3] == "1" &&
            this.board[4][4] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[0][0] == "1" &&
            this.board[1][0] == "1" &&
            this.board[2][0] == "1" &&
            this.board[3][0] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[1][0] == "1" &&
            this.board[2][0] == "1" &&
            this.board[3][0] == "1" &&
            this.board[4][0] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[0][1] == "1" &&
            this.board[1][1] == "1" &&
            this.board[2][1] == "1" &&
            this.board[3][1] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[1][1] == "1" &&
            this.board[2][1] == "1" &&
            this.board[3][1] == "1" &&
            this.board[4][1] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[0][2] == "1" &&
            this.board[1][2] == "1" &&
            this.board[2][2] == "1" &&
            this.board[3][2] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[1][2] == "1" &&
            this.board[2][2] == "1" &&
            this.board[3][2] == "1" &&
            this.board[4][2] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[0][3] == "1" &&
            this.board[1][3] == "1" &&
            this.board[2][3] == "1" &&
            this.board[3][3] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[1][3] == "1" &&
            this.board[2][3] == "1" &&
            this.board[3][3] == "1" &&
            this.board[4][3] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[0][4] == "1" &&
            this.board[1][4] == "1" &&
            this.board[2][4] == "1" &&
            this.board[3][4] == "1"
          ) {
            alert("PLayer 2 win!");
          } else if (
            this.board[1][4] == "1" &&
            this.board[2][4] == "1" &&
            this.board[3][4] == "1" &&
            this.board[4][4] == "1"
          ) {
            alert("PLayer 2 win!");
          }
    }  
}

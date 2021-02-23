import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  giliran: boolean = true;
  game: boolean = false;
  X = 0;
  Y =0;
  board = [
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
    ["*","*","*","*","*"],
  ];

  click() {
    if(this.game!=true){
      if (this.giliran) {
        if (this.board[this.X][this.Y] == "") {
          this.board[this.X][this.Y] = "0";
          this.giliran = false;
        } else {
          alert("Sudah diisi musuh!");
        }
      } else {
        if (this.board[this.X][this.Y] == "") {
          this.board[this.X][this.Y] = "1";
          this.giliran = true;
        } else {
          alert("Sudah diisi musuh!");
        }
      }
    }
    else{
      alert("Buyar");
    }
  }
}

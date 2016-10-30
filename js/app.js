var x = true;
// wait for the DOM to finish loading
$(document).ready(function() {
 // all code to manipulate the DOM
 // goes inside this function
 var cells = $(".box");
 $(cells).one('click', function(){
   putXorO(this);
   isGameOver();
 });
});

function putXorO(l){
 if(x){
   $(l).html("<h1>X</h1>");
   $(l)
   x = !x;
 }
 else {
   $(l).html("<h1>O</h1>");
   x = !x;
 }
}

function isGameOver(){
 if(($('#cell0').text() === $('#cell1').text()) && ($('#cell1').text()=== $('#cell2').text()) && ($('#cell0').text() === $('#cell2').text())){
   alert("VICTORY");
 }
  else {
    if(($('#cell3').text() === $('#cell4').text()) && ($('#cell4').text()=== $('#cell5').text()) && ($('#cell3').text() === $('#cell5').text())){
      alert("VICTORY");
    }else {
      if(($('#cell6').text() === $('#cell7').text()) && ($('#cell7').text()=== $('#cell8').text()) && ($('#cell6').text() === $('#cell8').text())){
        alert("VICTORY");
      }else {
        if(($('#cell0').text() === $('#cell3').text()) && ($('#cell3').text()=== $('#cell6').text()) && ($('#cell0').text() === $('#cell6').text())){
          alert("VICTORY");
        }else {
          if(($('#cell1').text() === $('#cell4').text()) && ($('#cell4').text()=== $('#cell7').text()) && ($('#cell1').text() === $('#cell7').text())){
            alert("VICTORY");
          }else {
            if(($('#cell2').text() === $('#cell5').text()) && ($('#cell5').text()=== $('#cell8').text()) && ($('#cell2').text() === $('#cell8').text())){
              alert("VICTORY");
            }else {
              if(($('#cell0').text() === $('#cell4').text()) && ($('#cell4').text()=== $('#cell8').text()) && ($('#cell0').text() === $('#cell8').text())){
                alert("VICTORY");
              }else {
                if(($('#cell6').text() === $('#cell4').text()) && ($('#cell4').text()=== $('#cell2').text()) && ($('#cell6').text() === $('#cell2').text())){
                  alert("VICTORY");
                }
            }
          }
        }
      }
    }
  }
}
}

//function to determine draw
// // function isGameDraw(){
// //   while (l>=9) {
// //   alert("Game is a draw");
// // }
// // }

//try to make an array

// // If any of these patters of board spaces have all X's or all O's somebody won!
// wins: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]],
//
// /* Check for whether someone won the game of it was a Cat's game. */
// function () {
//
//     // Loop through all possible winning combinations
//     for (k in this.wins) {
//         var pattern = this.wins[k];
//         var p = this.board[pattern[0]] + this.board[pattern[1]] + this.board[pattern[2]];
//         if (p == "XXX") {
//             alert("X");  // X Won!
//         } else if (p == "OOO") {
//             alert( "O");  // O Won!
//         }
//     }
//
//     // Check if all spaces in the board are filled, then its a Cat's game
//     var cnt = 0;
//     for (s in this.board) {
//         if (this.board[s]) { cnt += 1; }
//     }
//     if (cnt == 9) {
//         return "Cat";  // Cat's game!
//     }
// }

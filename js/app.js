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


// // function to determine draw
function isGameDraw(){
  while (x>=9) {
  alert("Game is a draw");
}
}

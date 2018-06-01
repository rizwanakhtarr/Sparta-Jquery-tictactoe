$(document).ready(function(){
  var $turn = $('#playerTurn');
  // console.log(reset);

  var anotherturn = 1;
  var player1 = true;
  // $reset.prepend("table");

  $("td").click(function() {


    if ($(this).text()=="" && player1) {
      if ((anotherturn%2)==1) {
         $(this).append("X");
         $(this).toggleClass("X");
        }
      else { $(this).append("O");
        }
      anotherturn++;



    }
  });



  $('#reset').click(function(){

    var space0 = $("#clear tr:nth-child(0) td:nth-child(0)").html('');
    var space1 = $("#clear tr:nth-child(1) td:nth-child(1)").html('');
    var space2 = $("#clear tr:nth-child(2) td:nth-child(2)").html('');
    var space3 = $("#clear tr:nth-child(3) td:nth-child(3)").html('');
    var space4 = $("#clear tr:nth-child(4) td:nth-child(4)").html('');
    var space5 = $("#clear tr:nth-child(5) td:nth-child(5)").html('');
    var space6 = $("#clear tr:nth-child(6) td:nth-child(6)").html('');
    var space7 = $("#clear tr:nth-child(7) td:nth-child(7)").html('');
    var space8 = $("#clear tr:nth-child(8) td:nth-child(8)").html('');
    //resets X nd O boxes

});









});

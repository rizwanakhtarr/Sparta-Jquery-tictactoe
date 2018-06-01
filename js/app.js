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

  

  // $('#reset').click(function(){
  //   $("td").remove();
  // });



  // $reset.children().hover();
  // $("data-num").click(function() {
  //   $(this).toggleClass('X');


  // for (var i = 0; i < newreset.length; i++) {
  //   $reset.append(`<table>${ reset[i] }</table>`); // using template lierals instead of concentation
  // }
  // // });


});

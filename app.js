// JQUERY
$(document).ready(function() {
  let x = "x";
  let o = "o";
  turns = 0;
  let spot1 = $("#spot1");
  let spot2 = $("#spot2");
  let spot3 = $("#spot3");
  let spot4 = $("#spot4");
  let spot5 = $("#spot5");
  let spot6 = $("#spot6");
  let spot7 = $("#spot7");
  let spot8 = $("#spot8");
  let spot9 = $("#spot9");

  $("#board li").on("click", function() {
    if (
      (spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o")) ||
      (spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o")) ||
      (spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o")) ||
      (spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o")) ||
      (spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o")) ||
      (spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o")) ||
      (spot3.hasClass("o") && spot6.hasClass("o") && spot9.hasClass("o")) ||
      (spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o"))
    ) {
      alert("O Won!");
      // refresh the board
      $("#board li").text("*");
      $("#board li").removeClass("disable");
      $("#board li").removeClass("o");
      $("#board li").removeClass("x");
      turns = 0;
    } else if (
      (spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x")) ||
      (spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x")) ||
      (spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x")) ||
      (spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x")) ||
      (spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasClass("x")) ||
      (spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x")) ||
      (spot3.hasClass("x") && spot6.hasClass("x") && spot9.hasClass("x")) ||
      (spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x"))
    ) {
      alert("X Won!");
      // refresh the board
      $("#board li").removeClass("disabled");
      $("#board li").text("*");
      $("#board li").removeClass("o");
      $("#board li").removeClass("x");
      turns = 0;
    }
    //all spots are filled and no Winner
    else if (turns == 9) {
      alert("its a Tie!");
      // refresh the board
      $("#board li").removeClass("disabled");
      $("#board li").text("*");
      $("#board li").removeClass("o");
      $("#board li").removeClass("x");
      turns = 0;
    }
    //check if spot has been played
    else if ($(this).hasClass("disabled")) {
      alert("this spot is filled!");
    }
    //regulate appropriate turn
    else if (turns % 2 == 0) {
      turns++;
      $(this).text(o);
      $(this).addClass("o disabled"); //turn taken
      if (
        (spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o")) ||
        (spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o")) ||
        (spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o")) ||
        (spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o")) ||
        (spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o")) ||
        (spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o")) ||
        (spot3.hasClass("o") && spot6.hasClass("o") && spot9.hasClass("o")) ||
        (spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o"))
      ) {
        alert("O Won!");

        turns = 0;
      }
    } else if (turns % 2 != 0) {
      turns++;
      $(this).text(x);
      $(this).addClass("x disabled"); //turn taken
      if (
        (spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x")) ||
        (spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x")) ||
        (spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x")) ||
        (spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x")) ||
        (spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasClass("x")) ||
        (spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x")) ||
        (spot3.hasClass("x") && spot6.hasClass("x") && spot9.hasClass("x")) ||
        (spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x"))
      ) {
        alert("X Won!");
        turns = 0;
      }
    }
  });

  //Reset button
  $("#reset").on("click", function() {
    $("#board li").removeClass("disabled");
    $("#board li").text("*");
    $("#board li").removeClass("o");
    $("#board li").removeClass("x");
    turns = 0;
  });
}); //end of document

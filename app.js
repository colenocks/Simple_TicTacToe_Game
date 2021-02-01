$(document).ready(function () {
  const boardList = $("#board li");
  const modalText = $(".modal-text");
  const modalButton = $(".modal button");
  const modalContainer = $(".modal-container");
  let turns = 0;

  let spot1 = $("#spot1");
  let spot2 = $("#spot2");
  let spot3 = $("#spot3");
  let spot4 = $("#spot4");
  let spot5 = $("#spot5");
  let spot6 = $("#spot6");
  let spot7 = $("#spot7");
  let spot8 = $("#spot8");
  let spot9 = $("#spot9");

  const refreshBoard = () => {
    boardList.removeClass("filled");
    boardList.removeClass("o");
    boardList.removeClass("x");
    boardList.text("*");
  };

  const checkWinFor = (value) => {
    if (
      (spot1.hasClass(value) &&
        spot2.hasClass(value) &&
        spot3.hasClass(value)) ||
      (spot1.hasClass(value) &&
        spot4.hasClass(value) &&
        spot7.hasClass(value)) ||
      (spot1.hasClass(value) &&
        spot5.hasClass(value) &&
        spot9.hasClass(value)) ||
      (spot2.hasClass(value) &&
        spot5.hasClass(value) &&
        spot8.hasClass(value)) ||
      (spot4.hasClass(value) &&
        spot5.hasClass(value) &&
        spot6.hasClass(value)) ||
      (spot7.hasClass(value) &&
        spot8.hasClass(value) &&
        spot9.hasClass(value)) ||
      (spot3.hasClass(value) &&
        spot6.hasClass(value) &&
        spot9.hasClass(value)) ||
      (spot3.hasClass(value) && spot5.hasClass(value) && spot7.hasClass(value))
    ) {
      return true;
    } else {
      return false;
    }
  };

  const displayModal = (msg) => {
    modalContainer.show();
    modalText.text(msg);
  };

  const closeModal = () => {
    modalContainer.hide();
  };

  modalButton.on("click", closeModal);

  boardList.on("click", function () {
    if ($(this).hasClass("filled")) {
      displayModal("This spot is filled!");
    } else if (turns % 2 === 0) {
      //even turns
      turns++;
      $(this).text("o");
      $(this).addClass("o filled");
      if (checkWinFor("o")) {
        displayModal("Player O Won!");
        refreshBoard();
        turns = 0;
      }
    } else if (turns % 2 !== 0) {
      // odd turns
      turns++;
      $(this).text("x");
      $(this).addClass("x filled");
      if (checkWinFor("x")) {
        displayModal("Player X Won!");
        refreshBoard();
        turns = 0;
      }
    }
    //No more turns
    if (turns === 9) {
      displayModal("Its a Tie!");
      refreshBoard();
      turns = 0;
    }
  });

  //Reset button
  $("#reset").on("click", function () {
    refreshBoard();
  });
});

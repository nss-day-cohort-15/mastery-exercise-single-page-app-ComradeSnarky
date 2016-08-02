var CarLot = (function(originalLot) {
    var cardClick = document.getElementsByClassName('card');
    var textBox = document.getElementById('textInput');

  originalLot.activateEvents = function() {
    for (var i = 0; i < cardClick.length; i++) {
      cardClick[i].addEventListener("click", CarLot.toggleCard);
    }
    textBox.addEventListener("keyup", CarLot.changeDescrip);
  };
  return originalLot;
})(CarLot || {});



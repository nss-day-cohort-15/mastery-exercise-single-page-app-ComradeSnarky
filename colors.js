var CarLot = (function(toggle){

// On click, calls toggleReset applies the gray class to the
// clicked card, widening the border and changing the card's
// background-color. clears text input and places cursor there.
  var textBox = document.getElementById('textInput');
  var selectCard;
  toggle.toggleCard = function(event, gray) {
    console.log(event.currentTarget.lastElementChild);

    selectCard = event.currentTarget;
    toggle.toggleReset();
    if (selectCard.tagName.toLowerCase() === "div") {
        selectCard.classList.toggle("gray");
        textBox.value = "";
        textBox.focus();
        return selectCard;
        return textBox;
    }
  }
  toggle.changeDescrip = function(event) {
    if (textBox.length !== 0) {
      selectCard.lastElementChild.innerHTML = "Description: " + textBox.value;
    }
  }

// Loops through cards, removing the gray class
// (so that only one card receives visual focus at a time.
  toggle.toggleReset = function() {
    var clearCard = document.getElementsByClassName("card");
    console.log(clearCard);
    for (var i = 0; i < clearCard.length; i++) {
      clearCard[i].classList.remove("gray");
      console.log(clearCard[i]);
    }
  }
  return toggle;
})(CarLot || {});
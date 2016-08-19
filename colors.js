CarLot = (function(carlot){
  carlot.resetCards = function(cards) {
    cards.forEach(function(card){
    card.classList.remove('gray')
    })
  }
  carlot.styleCard = function(card, pink) {
    card.classList.add(pink)
  }
  carlot.mirrorText = function(card, userInput) {
    userInput.addEventListener('keyup', function() {
      if (card.classList.contains("gray")){
        card.querySelector('p').innerHTML = userInput.value
      }
    })
  }
  return carlot
})(CarLot);
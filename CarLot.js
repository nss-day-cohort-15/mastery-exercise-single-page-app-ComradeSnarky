//main IIFE
var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.open('GET', 'inventory.json');
        inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(inventoryLoader.responseText);
          callback(inventory.cars);
      });
      inventoryLoader.send();
    }
  }

})();






//  ```function displayInventory(inventory) {
//     console.log(inventory)
//   }


// CarLot.loadInventory();
//  +CarLot.loadInventory(displayInventory)
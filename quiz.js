function populatePage (inventory) {
  // console.log(inventory)
  // Loop over the inventory and populate the page
  var carContain = document.getElementById("carContainer");
  var carListing = "";
  for (var i=0; i < inventory.length; i++) {
    if (i%3 === 0) {
      carListing += "<div class = 'row-fluid row-eq-h'>";
    }

    //found something that made sense to me and duplicated...look into it more after requirements are met
      carListing += "<div class='col-sm-4 card' id='card" + i + "' style='border-color: " + inventory[i].color + "'><p>" + inventory[i].year + " " + inventory[i].make + " " + inventory[i].model + "</p>";
      carListing += "<p>Price: " + inventory[i].price + "</p>";
      carListing += "<p>Color: " + inventory[i].color + "</p>";
      carListing += "<p>Purchased: " + inventory[i].purchased + "</p>";
      carListing += "<p>Description: " + inventory[i].description + "</p></div>";

    if (i%3 === 2) {
      carListing += "</div>";
    }

    carContain.innerHTML = carListing;
  };
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

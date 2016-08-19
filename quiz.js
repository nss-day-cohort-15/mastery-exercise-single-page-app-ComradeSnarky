(function(){
function populatePage (inventory) {
  // console.log(inventory)
  // Loop over the inventory and populate the page
  var output = document.getElementById("output");
  var carListing = "";
  inventory.forEach(function(car, i){ //argument in function(car) becomes the 'i' like in a regular for loop
    if (i % 3 === 0) { // starts a new row at the point to which your cards go to the next row (3 can be however many 'cards' you will have on each row)
      carListing += `<div class="row">`
    }
    carListing += `
      <div class="col-md-4 carCard" style="border-color: ${car.color}">
      <h3>${car.make}</h3>
      <h3>${car.model}</h3>
      <h3>${car.year}</h3>
      <h3>${car.price}</h3>
      <h3>${car.color}</h3>
      <h3>${car.purchased}</h3>
      <p>${car.description}</p>
      </div>
      ` //+= because each time you are reassigning carListing //need variable to build string and push into innerHTML so it does not get closed automatically

  if ((i + 1) % 3 === 0) {
    carListing += `</div>`
  }
  })
  output.innerHTML = carListing

  console.log(inventory)
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
 }

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

})();
//var locations = []; // this array will hold your objects

// object constructor

// object instances

// push object instances to locations array

// DO NOT MODIFY THIS CODE

var locations = [];

  // var il  = {state: il,
  //           revenue: 5000,
  //           locationCount: 12};
  // var mn  = {state: mn,
  //           revenue: 300,
  //           locationCount: 3};
  // var nv  = {state: nv,
  //           revenue: 25000,
  //           locationCount: 1};


//code that was given with the assignment
$(document).ready(function () {

  var il = new Region("IL", 5000, 12);
  var mn = new Region("MN", 300, 3);
  var nv = new Region("NV", 25000, 1);

  locations.push(mn, il, nv);

  function Region(state, revenue, locationCount) {
    this.state = state;
    this.revenue = revenue;
    this.locationCount = locationCount;
    this.averageRevenue = function() {
      var sum = this.revenue / this.locationCount;
        return sum;
    };
  }

  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});

// business logic
function Ticket(age, time, movie) {
  this.age = age;
  this.time = time;
  this.movie = movie;
}

// user interface logic
$(document).ready(function() {
  $("form#ticket-pricer").submit(function(event) {
    event.preventDefault();

    var ageInput = $("input[name=radAge]:radio:checked").val();
    var timeInput = $("#timeSelect").val();
    var movieInput = $("#movieSelect").val();
    var movieSelect = new Ticket(ageInput, timeInput, movieInput);

    var ticketPrice = 6;
    var ticketCalculator = function() {
      if (( ageInput != 65 ) && ( ageInput != 12 )) {
        ticketPrice += 2;
      }
      if ( timeInput > 600 ) {
        ticketPrice += 2;
      }
      if ( movieInput === "newRelease" ) {
        ticketPrice += 1;
      }
    }
    ticketCalculator();
    alert(ticketPrice);
  });
});

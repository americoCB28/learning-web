const nameOnPass = "Americo";
console.log("Passenger Name: " + nameOnPass);
const nameOnId = "Jhomira";
const nameMatch = nameOnPass === nameOnId;
console.log("ID confirmed? " + nameMatch);
const length = 25;
const doesLengthPass = length < 30;
const height = 40;
const doesHeightPass = height < 55;
const isHandBaggageEligible = doesLengthPass && doesHeightPass;
console.log("Is Hand Baggage Elegible? " + isHandBaggageEligible);
const flightDes = "Barcelona";
const returnFrom = "Barcelona";
const isRoundTrip = flightDes === returnFrom;
console.log("Round Trip Check? " + isRoundTrip);
const bookings = 7;
const totalCapacity = 60;
const isFlightAvailable = bookings < totalCapacity;
console.log("Are seats available? " + isFlightAvailable);
const age = 27;
const ageAvailable = 60;
const isCheckAvailable = age < ageAvailable;
console.log("Are you authorized to travel? " + isCheckAvailable);
const seat = "pasillo";
const seatAvailable = "ventana";
const isSeatAvailable = seat === seatAvailable;
console.log("Is the seat available? " + isSeatAvailable);
document.querySelector("#name").innerHTML = nameOnPass;
document.querySelector("#id").innerHTML = nameMatch;
document.querySelector("#bag").innerHTML = isHandBaggageEligible;
document.querySelector("#des").innerHTML = isRoundTrip;
document.querySelector("#seat").innerHTML = isFlightAvailable;
document.querySelector("#travel").innerHTML = isCheckAvailable;
document.querySelector("#pasillo").innerHTML = isSeatAvailable;
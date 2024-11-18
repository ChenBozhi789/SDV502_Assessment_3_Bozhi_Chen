function bookTicketValidate(name, destination, seats) {
    // Constants
    const pricePerSeat = 10;
    const maximumSeat = 10;
    const totalFare = seats * pricePerSeat;

    // Validation input
    if (!name || typeof name != "string" || name.trim() == "" ||
        !destination || typeof destination != "string" || destination.trim() == "" ||
        !seats || typeof seats != "number" || seats <= 0 || seats > maximumSeat) {
        return {
            status: "error",
            message: "Input value is invalid",
        };
    } else {
        return {
            status: "success",
            message: `Name: ${name}, Destination: ${destination}, Seats: ${seats}, Total fare: ${totalFare}.`,
        };
    }
} 


document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const destination = document.getElementById("destination").value;
    const seats = parseInt(document.getElementById("seats").value, 10);

    const result = bookTicket(name, destination, seats)
});

module.exports = { bookTicketValidate };
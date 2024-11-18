// These changes is for verifying GitHub Actions pull request trigger condition

// Simulate DOM testing environment
document.body.innerHTML = `
    <form id="bookingForm">
        <input id="name" value="John" />
        <input id="destination" value="Nelson" />
        <input id="seats" value="5" />
        <div id="message"></div>
    </form>
`;

const { bookTicketValidate } = require("../src/script")

const bookTicketValidate_case = [
    // 1. booking a ticket for a specified destination
    // Valid input
    {
        name: "John",
        destination: "Nelson",
        seats: 1,
        expected: {
            status: "success",
            message: "Name: John, Destination: Nelson, Seats: 1, Total fare: 10.",
        }
    },
    {
        name: "Bozhi",
        destination: "Tasman",
        seats: 5,
        expected: {
            status: "success",
            message: "Name: Bozhi, Destination: Tasman, Seats: 5, Total fare: 50.",
        }
    },
    // Invalid input
    {
        name: "John",
        destination: "",
        seats: 1,
        expected: {
            status: "error",
            message: "Input value is invalid",
        }
    },
    {
        name: "John",
        destination: 112233,
        seats: 1,
        expected: {
            status: "error",
            message: "Input value is invalid",
        }
    },
    // 2. verifying seat availability based on user input
    // Valid input
    {
        name: "John",
        destination: "Nelson",
        seats: 1,
        expected: {
            status: "success",
            message: "Name: John, Destination: Nelson, Seats: 1, Total fare: 10.",
        }
    },
    // Invalid input
    {
        name: "John",
        destination: "Nelson",
        seats: -1,
        expected: {
            status: "error",
            message: "Input value is invalid",
        }
    },
    {
        name: "John",
        destination: "Nelson",
        seats: 0,
        expected: {
            status: "error",
            message: "Input value is invalid",
        }
    },
    {
        name: "John",
        destination: "Nelson",
        seats: "",
        expected: {
            status: "error",
            message: "Input value is invalid",
        }
    },
    {
        name: "John",
        destination: "Nelson",
        seats: "1",
        expected: {
            status: "error",
            message: "Input value is invalid",
        }
    },
    // 3. calculating the fare according to the number of tickets booked.
    // Valid input
    {
        name: "John",
        destination: "Nelson",
        seats: 1,
        expected: {
            status: "success",
            message: "Name: John, Destination: Nelson, Seats: 1, Total fare: 10.",
        }
    },
    {
        name: "John",
        destination: "Nelson",
        seats: 10,
        expected: {
            status: "success",
            message: "Name: John, Destination: Nelson, Seats: 10, Total fare: 100.",
        }
    },
    // Invalid input
    {
        name: "John",
        destination: "Nelson",
        seats: -1,
        expected: {
            status: "error",
            message: "Input value is invalid",
        }
    },
    {
        name: "John",
        destination: "Nelson",
        seats: 0,
        expected: {
            status: "error",
            message: "Input value is invalid",
        }
    },
    {
        name: "John",
        destination: "Nelson",
        seats: 11,
        expected: {
            status: "error",
            message: "Input value is invalid",
        }
    },
    {
        name: "John",
        destination: "Nelson",
        seats: "",
        expected: {
            status: "error",
            message: "Input value is invalid",
        }
    },
    {
        name: "John",
        destination: "Nelson",
        seats: "1",
        expected: {
            status: "error",
            message: "Input value is invalid",
        }
    }
];

describe("Ticket booking testing", () => {
    // Test bookTicketValidate function
    test.each(bookTicketValidate_case)(
        "Given name: $name, destination: $destination, seats: $seats, returns $expected.status",
        ({ name, destination, seats, expected }) => {
            const result = bookTicketValidate(name, destination, seats);
            expect(result).toEqual(expected);
        }
    );
});


// Get current date/time formatted nicely
function getTimestamp() {
    return new Date().toLocaleString();
}

// Check in a guest to a room
function checkIn(roomNumber) {
    const input = document.getElementById('room' + roomNumber);
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter a guest name for Room " + roomNumber);
        return;
    }

    const timestamp = getTimestamp();
    const data = name + ' checked into Room ' + roomNumber + ' at ' + timestamp;

    document.getElementById('checkInDisplay').innerText = data;

    // Disable the input after check-in
    input.disabled = true;
}

// Lock a room (prevents editing)
function lockRoom(roomNumber) {
    const input = document.getElementById('room' + roomNumber);
    
    if (input.disabled) {
        alert("Room " + roomNumber + " is already locked!");
        return;
    }

    input.disabled = true;
    document.getElementById('checkInDisplay').innerText = "Room " + roomNumber + " is now locked.";
}

// Clear a room (remove guest and unlock)
function clearRoom(roomNumber) {
    const input = document.getElementById('room' + roomNumber);

    input.value = "";
    input.disabled = false;

    document.getElementById('checkInDisplay').innerText = "Room " + roomNumber + " has been cleared.";
}
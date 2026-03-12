function datetime() {
    document.getElementById('placeholder').innerHTML = new Date();
  }

  function saveData() {
    const input = document.querySelector('input');
    const name = input.value.trim();

    if (name === "") {
      // Do nothing or you can add a message here
      return;
    }

    // Call datetime() to update 'placeholder' with current date/time
    datetime();

    // Read the timestamp
    const timestamp = document.getElementById('placeholder').innerHTML;

    // Create the check-in info string
    const data = name + ' checked in at ' + timestamp;

    // Write it on the page
    document.getElementById('checkInDisplay').innerText = data;
  }
// Welcome message
console.log("Welcome to the Community Portal");
window.onload = () => alert("Page fully loaded!");

// Form submission
function submitForm(event) {
  event.preventDefault();
  document.getElementById("confirmation").innerText = "Registration successful!";
  
  // Save preference
  const selectedEvent = document.getElementById("eventType").value;
  localStorage.setItem("preferredEvent", selectedEvent);
}

// Phone validation
function validatePhone(input) {
  const regex = /^\d{10}$/;
  if (!regex.test(input.value)) {
    alert("Invalid phone number. Please enter 10 digits.");
    input.focus();
  }
}

// Show fee based on event
function showFee(select) {
  const value = select.value;
  let feeText = '';
  if (value === "music") feeText = "Fee: $10";
  else if (value === "art") feeText = "Fee: $5";
  else if (value === "food") feeText = "Fee: Free";
  document.getElementById("feeDisplay").innerText = feeText;
}

// Enlarge image on double click
function enlargeImage(img) {
  img.style.width = "300px";
}

// Count textarea characters
function countCharacters(textarea) {
  document.getElementById("charCount").innerText = `Characters: ${textarea.value.length}`;
}

// Restore saved event preference
window.onload = function () {
  const savedEvent = localStorage.getItem("preferredEvent");
  if (savedEvent) {
    document.getElementById("eventType").value = savedEvent;
    showFee({ value: savedEvent });
  }
};

// Clear preferences
function clearPrefs() {
  localStorage.clear();
  sessionStorage.clear();
  alert("Preferences cleared.");
}

// Geolocation
function findNearby() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        document.getElementById("locationResult").innerText =
          `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
      },
      (error) => {
        document.getElementById("locationResult").innerText = "Geolocation error: " + error.message;
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

// Warn on leave (Exercise 7)
window.onbeforeunload = function () {
  return "You have unsaved changes. Are you sure you want to leave?";
};

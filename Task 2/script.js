let submitButton = document.getElementById('btn');
let messageLabel = document.getElementById('message-label');
let symptomsCheckbox = document.getElementById('symptoms');
let closeContactCheckbox = document.getElementById('close-contact');
let header = document.getElementById('header');

submitButton.addEventListener('click', checkIn);
header.addEventListener('click', reloadPage);

function checkIn() {
    if (symptomsCheckbox.checked && closeContactCheckbox.checked) {
        messageLabel.textContent = "You have successfully checked in"
        messageLabel.style.color = "#008000"
        messageLabel.style.display='block';
    }
    else
    {
        messageLabel.textContent = `You have not selected the check boxes. 
        Please go home and get tested.`
        messageLabel.style.color = "#B22222"
        messageLabel.style.display='block';
    }
}

function reloadPage() {
    location.reload();
}

function initMap() {
    // Create map object
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: { lat: -37.81100320947774, lng: 145.062455385037},
      mapTypeId: "terrain",
    });
    
    //Create run path
    const runPath = new google.maps.Polyline({
      path: [],
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 4,
    });
  
    // Display run path on map
    runPath.setMap(map);
  }
    
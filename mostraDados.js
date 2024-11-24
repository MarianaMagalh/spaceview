
// Database Paths
var dataLuzPath = 'Test/estadoLuz';
var dataPortaPath = 'Test/estadoPorta';

// Get a database reference 
const databaseLuz = database.ref(dataLuzPath);
const databasePorta = database.ref(dataPortaPath);

// Variables to save database current values
var LuzReading;
var PortaReading;

// Attach an asynchronous callback to read the data
databaseLuz.on('value', (snapshot) => {
  LuzReading = snapshot.val();
  console.log(LuzReading);
  document.getElementById("reading-Luz").innerHTML = LuzReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

databasePorta.on('value', (snapshot) => {
  PortaReading = snapshot.val();
  console.log(PortaReading);
  document.getElementById("reading-Porta").innerHTML = PortaReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});
let map = L.map('map').setView([28.152718, -81.858120], 6.11);

L.tileLayer('https://api.mapbox.com/styles/v1/jess-cattanach/cm3rum30x002501s29oirbzho/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzcy1jYXR0YW5hY2giLCJhIjoiY20zcnN0aXlkMDFrMDJpb3RtYmxuOGYwNCJ9.fRbygEG3SzVbqz6uQ3gchg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);




let marker1 = L.marker([29.901243, -81.312431]).addTo(map);
marker1.bindPopup("St. Augustine is a lovely historical city. Some of my family lives here.");

let marker2 = L.marker([28.538336, -81.379234]).addTo(map);
marker2.bindPopup("I've been to Orlando countless times for the theme parks!");

let marker3 = L.marker([29.187199, -82.140091]).addTo(map);
marker3.bindPopup("Ocala has some amazing springs and thrift spots!");

let marker4 =  L.marker([27.964157, -82.452606]).addTo(map);
marker4.bindPopup("I also have family in Tampa. Bok Tower Gardens is gorgeous.");
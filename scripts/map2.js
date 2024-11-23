let map2 = L.map('map2').setView([28.370564, -82.800767], 5.79);

L.tileLayer('https://api.mapbox.com/styles/v1/jess-cattanach/cm3sz4coc00eu01rweagxgdfi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamVzcy1jYXR0YW5hY2giLCJhIjoiY20zcnN0aXlkMDFrMDJpb3RtYmxuOGYwNCJ9.fRbygEG3SzVbqz6uQ3gchg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map2);

for ( let i = 0; i < places.length; i++){
    L.marker( [places[i].latitude, places[i].longitude])
    .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
    .addTo(map2);
}

import Geolocation from '@react-native-community/geolocation';


export const allowLocation = () => {
  let locations_array = []
  Geolocation.watchPosition((pos) => {
    locations_array.push({ latitude: pos.coords.latitude, longitude: pos.coords.longitude, time: pos.timestamp })
  }, (err) => {
    console.log(err);
  }, {
    enableHighAccuracy: true,
    distanceFilter: 1,
  });
  setTimeout(() => {
    // http post request with the array and then clear the array
    locations_array = []
  }, 1800000)
}
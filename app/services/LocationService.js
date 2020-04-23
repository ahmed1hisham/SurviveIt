import Geolocation from '@react-native-community/geolocation';
//https://backend-surviveit.herokuapp.com/users/addLocation
import axios from 'axios';
const sendUserLocationData = (phoneNumber, locationsArray) => {
  axios.post('https://backend-surviveit.herokuapp.com/users/addLocation', {
    phoneNumber,
    location: locationsArray
  })
}
export const allowLocation = (phoneNumber) => {
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
    sendUserLocationData(phoneNumber, locations_array)
    locations_array = []
  }, 1800000)
}
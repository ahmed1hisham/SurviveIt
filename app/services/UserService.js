// Sample empty service
import axios from 'axios';
export const userSignUp = (name, phoneNumber, password, national_id) => {
  return new Promise(async (resolve, reject) => {
    axios.post(`https://backend-surviveit.herokuapp.com/auth/signup`, {
      phoneNumber,
      name,
      nationalId: national_id,
      password
    }).then(res => resolve(res))
      .catch(err => reject(err))
  })
}

export const userSignIn = (phoneNumber, password) => {
  return new Promise(async (resolve, reject) => {
    axios.post(`https://backend-surviveit.herokuapp.com/auth/signin`, {
      phoneNumber,
      password
    }).then(res => resolve(res))
      .catch(err => reject(err))
  })
}

// return new Promise(async (resolve, reject) => {
//   if (responseJSON != null) {
//       reject(responseJSON);
//   } else {
//       resolve();
//   }
// })
//https://backend-surviveit.herokuapp.com/auth/signin
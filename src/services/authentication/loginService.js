import axios from 'axios';

const loginUserService = ({email, password}) => {
  const endpoint = 'http://getcolors.cl:3000/security/signin'

  const body = {
    email,
    password
  };

  return axios.post(endpoint, body)
  .then(response => {
    console.log("response ", response);
    return response.data.token;
  }).catch(error =>{
    return error;
  });
};

export default loginUserService;
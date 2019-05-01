import axios from "axios";

const registerUserService = credentials => {
  const endpoint = "http://getcolors.cl:3000/security/signup";

  return axios.post(endpoint, credentials);
};

export default registerUserService;

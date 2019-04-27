import axios from "axios";

const loginUserService = credentials => {
  const endpoint = "http://getcolors.cl:3000/security/signin";

  return axios.post(endpoint, credentials);
};

export default loginUserService;

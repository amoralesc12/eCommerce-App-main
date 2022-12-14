import axios from "axios";

export async function login(email, password) {
  const host = "http://localhost:3001";
  // const host = proces process.env.BACKEND_API ||s.env.BACKEND_API ? process.env.BACKEND_API : "http://localhost:3001";

  const options = {
    method: "POST",
    url: `${host}/user/login`,
    data: {
      email,
      password,
    },
  };

  const response = await axios.request(options);
  console.log(response.data);
  return response.data;
}

export async function register(name, email, password) {
  const host = "http://localhost:3001";
  // const host = process.env.BACKEND_API ? process.env.BACKEND_API : "http://localhost:3001";

  const options = {
    method: "POST",
    url: `${host}/user/register`,
    data: {
      name,
      email,
      password,
    },
  };

  const response = await axios.request(options);
  console.log(response.data);
  return response.data;
}

// let api = "http://localhost:8080/api";

import axios from "axios";

export const registerCliente = async (cliente) => {
  let formData = new FormData();
  formData.append("cliente", JSON.stringify(cliente));

  return await axios
    .post("http://localhost:8085/api/cliente", formData)
    .then((res) => res)
    .catch((err) => err.response);
};

export const login = async (email, senha) => {
  let formData = new FormData();
  formData.append("email", email);
  formData.append("senha", senha);
  return await axios
    .post("http://localhost:8085/api/cliente/login", formData)
    .then((res) => res)
    .catch((err) => err.response);
};

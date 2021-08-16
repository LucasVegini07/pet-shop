// let api = "http://localhost:8080/api";

import axios from "axios";

export const registerFuncionario = async (funcionario) => {
  let formData = new FormData();
  formData.append("funcionario", JSON.stringify(funcionario));

  return await axios
    .post("http://localhost:8085/api/funcionario", formData)
    .then((res) => res)
    .catch((err) => err.response);
};

export const login = async (email, senha) => {
  let formData = new FormData();
  formData.append("email", email);
  formData.append("senha", senha);
  return await axios
    .post("http://localhost:8085/api/funcionario/login", formData)
    .then((res) => res)
    .catch((err) => err.response);
};

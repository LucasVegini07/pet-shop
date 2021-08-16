import axios from "axios";

export const registerVacina = async (vacina) => {
  let formData = new FormData();
  formData.append("vacina", JSON.stringify(vacina));

  return await axios
    .post("http://localhost:8085/api/vacina", formData)
    .then((res) => res)
    .catch((err) => err.response);
};

export const registerRemedio = async (remedio) => {
  let formData = new FormData();
  formData.append("remedio", JSON.stringify(remedio));

  return await axios
    .post("http://localhost:8085/api/remedio", formData)
    .then((res) => res)
    .catch((err) => err.response);
};

export const getRemedios = async () => {
  return await axios
    .get(`http://localhost:8085/api/remedio`)
    .then((res) => res)
    .catch((err) => err.response);
};

export const getVacinas = async () => {
  return await axios
    .get(`http://localhost:8085/api/vacina`)
    .then((res) => res)
    .catch((err) => err.response);
};

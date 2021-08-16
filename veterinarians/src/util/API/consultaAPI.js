import axios from "axios";

export const registerConsulta = async (consulta, petId) => {
  let formData = new FormData();

  let cliente = { id: localStorage.getItem("id_cliente") };
  let animal = { id: petId };

  formData.append("consulta", JSON.stringify(consulta));
  formData.append("cliente", JSON.stringify(cliente));
  formData.append("animal", JSON.stringify(animal));

  return await axios

    .post(`http://localhost:8085/api/consulta`, formData)
    .then((res) => res)
    .catch((err) => err.response);
};

export const finalizaConsulta = async (
  remedio,
  vacina,
  descricao,
  consultaId
) => {
  let formData = new FormData();

  formData.append("remedio", remedio);
  formData.append("vacina", vacina);
  formData.append("descricao", descricao);
  formData.append("idConsulta", consultaId);

  return await axios

    .post(`http://localhost:8085/api/finaliza/consulta`, formData)
    .then((res) => res)
    .catch((err) => err.response);
};

export const getConsultas = async () => {
  return await axios
    .get(`http://localhost:8085/api/consulta`)
    .then((res) => res)
    .catch((err) => err.response);
};

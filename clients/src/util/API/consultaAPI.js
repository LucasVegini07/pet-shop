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

export const getConsultas = async (petId) => {
  return await axios
    .get(`http://localhost:8085/api/consulta/${petId}`)
    .then((res) => res)
    .catch((err) => err.response);
};

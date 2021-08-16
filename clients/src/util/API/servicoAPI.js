import axios from "axios";

export const registerService = async (servico, petId) => {
  let formData = new FormData();

  let cliente = { id: localStorage.getItem("id_cliente") };
  let animal = { id: petId };

  formData.append("servico", JSON.stringify(servico));
  formData.append("cliente", JSON.stringify(cliente));
  formData.append("animal", JSON.stringify(animal));

  return await axios
    .post("http://localhost:8085/api/servico", formData)
    .then((res) => res)
    .catch((err) => err.response);
};

export const getServices = async (petId) => {
  return await axios
    .get(`http://localhost:8085/api/servico/${petId}`)
    .then((res) => res)
    .catch((err) => err.response);
};

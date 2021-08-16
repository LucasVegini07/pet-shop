import axios from "axios";

export const getPets = async () => {
  return await axios
    .get(
      `http://localhost:8085/api/animal/${localStorage.getItem("id_cliente")}`
    )
    .then((res) => res)
    .catch((err) => err.response);
};

export const getPetById = async (id) => {
  return await axios
    .get(`http://localhost:8085/api/animal/get/${id}`)
    .then((res) => res)
    .catch((err) => err.response);
};

export const registerPet = async (animal, data) => {
  animal = { ...animal, data: data };
  let formData = new FormData();
  let cliente = { id: localStorage.getItem("id_cliente") };
  formData.append("animal", JSON.stringify(animal));
  formData.append("cliente", JSON.stringify(cliente));

  return await axios
    .post("http://localhost:8085/api/animal", formData)
    .then((res) => res)
    .catch((err) => err.response);
};

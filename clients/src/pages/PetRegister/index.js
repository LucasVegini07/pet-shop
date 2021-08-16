import React, { useState } from "react";
import moment from "moment";
import { Typography, TextField, MenuItem, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBack } from "@material-ui/icons";
import Warning from "../../components/Warning";
import Decision from "../../components/Decision";
import InputMask from "react-input-mask";
import * as animalAPI from "../../util/API/animalAPI";
import history from "../../history";

export default function PetRegister() {
  const [warningMessage, setWarningMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);
  const [typeWarning, setTypeWarning] = useState("info");
  const [openDecision, setOpenDecision] = useState(false);
  const [titleDecision, setTitleDecision] = useState("");
  const [descriptionDecision, setDescriptionDecision] = useState("");
  const [handleConfirmDecision, setHandleConfirmDecision] = useState(() => {});

  const [animal, setAnimal] = useState({
    nome: "",
    especie: "",
    raca: "",
    data: "",
    sexo: "",
  });

  const especies = ["Canina", "Felina", "Coelho", "Ave", "Roedor", "Equina"];

  const sexos = ["Macho", "Fêmea"];

  function handleNotSure() {
    setOpenDecision(false);
  }

  function handleChangeDecision(title, description) {
    setTitleDecision(title);
    setDescriptionDecision(description);
    setOpenDecision(true);
    setHandleConfirmDecision(() => RegisterPet);
  }

  function handleWarning(message, type) {
    setOpenWarning(true);
    setWarningMessage(message);
    setTypeWarning(type);
  }

  function onCloseWarning() {
    setOpenWarning(false);
  }

  async function RegisterPet() {
    if (!animal.nome) return handleWarning("Nome não pode ser vazio!", "error");

    if (!animal.especie)
      return handleWarning("Espécie não pode ser vazio!", "error");

    if (!animal.raca) return handleWarning("Raça não pode ser vazio!", "error");

    if (!animal.data) return handleWarning("Data não pode ser vazio!", "error");

    if (!animal.temperamento)
      return handleWarning("Temperamento não pode estar vazio!", "error");

    let newData = moment(animal.data, "YYYY-MM-DD");

    const response = await animalAPI.registerPet(animal, newData);

    if (response.erro === true) return handleWarning(response.message, "error");
    handleWarning("Cadastro feito com sucesso", "success");

    setTimeout(() => {
      history.push("/home");
    }, 3000);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#903DF4",
          width: "100%",
          color: "#fff",
          marginBottom: 24,
        }}
      >
        <IconButton onClick={() => history.push("/home")}>
          <ArrowBack style={{ color: "#fff" }}></ArrowBack>
        </IconButton>
        <Typography
          variant="h6"
          style={{
            fontWeight: 500,
            textAlign: "justify",
            justifyContent: "center",
            padding: 16,
          }}
        >
          Adicionar pet
        </Typography>{" "}
      </div>
      <div style={{ padding: 16 }}>
        <TextField
          variant="outlined"
          label="Nome"
          margin="dense"
          fullWidth
          value={animal.nome}
          onChange={(event) =>
            setAnimal({ ...animal, nome: event.target.value })
          }
        />
        <TextField
          id="outlined-required"
          select
          label="Sexo"
          variant="outlined"
          margin="dense"
          fullWidth
          value={animal.sexo}
          onChange={(event) =>
            setAnimal({ ...animal, sexo: event.target.value })
          }
        >
          {sexos.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-required"
          select
          label="Espécie"
          variant="outlined"
          margin="dense"
          fullWidth
          value={animal.especie}
          onChange={(event) =>
            setAnimal({ ...animal, especie: event.target.value })
          }
        >
          {especies.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="outlined"
          label="Raça"
          margin="dense"
          fullWidth
          value={animal.raca}
          onChange={(event) =>
            setAnimal({ ...animal, raca: event.target.value })
          }
        />
        <InputMask
          mask="99/99/9999"
          value={animal.data}
          onChange={(event) =>
            setAnimal({ ...animal, data: event.target.value })
          }
        >
          {() => (
            <TextField
              label="Data de nascimento"
              margin="dense"
              variant="outlined"
              name="dataNascimento"
              value={animal.data}
              fullWidth
            />
          )}
        </InputMask>
        <TextField
          variant="outlined"
          label="Temperamento"
          style={{ marginTop: 16 }}
          margin="dense"
          multiline
          rows="3"
          fullWidth
          value={animal.temperamento}
          onChange={(event) =>
            setAnimal({ ...animal, temperamento: event.target.value })
          }
          helperText="Escreva detalhadamente o temperamento do seu pet"
        />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "100%",
          padding: 16,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() =>
            handleChangeDecision(
              "Cadastrar pet",
              "Atenção! Você cadastrando um pet no sistema, desaja continuar?"
            )
          }
        >
          Criar
        </Button>
      </div>
      {openWarning && (
        <Warning
          message={warningMessage}
          open={openWarning}
          typeMessage={typeWarning}
          onClose={onCloseWarning}
        />
      )}
      {openDecision && (
        <Decision
          open={openDecision}
          handleConfirm={handleConfirmDecision}
          notSure={handleNotSure}
          title={titleDecision}
          description={descriptionDecision}
        />
      )}
    </div>
  );
}

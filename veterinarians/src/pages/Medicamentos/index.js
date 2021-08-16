import React, { useState, useEffect } from "react";
import Header from "../../components/AppBar";
import Warning from "../../components/Warning";
import Decision from "../../components/Decision";
import {
  Typography,
  Grid,
  TextField,
  Card,
  makeStyles,
  Button,
  MenuItem,
} from "@material-ui/core";
import * as medicamentoAPI from "../../util/API/medicamentoAPI";

export default function Home() {
  useEffect(() => {
    async function fetchData() {
      let remedios = await medicamentoAPI.getRemedios();
      setRemedios(remedios.data);

      let vacinas = await medicamentoAPI.getVacinas();
      setVacinas(vacinas.data);
    }
    fetchData();
  }, []);

  const [remedios, setRemedios] = useState([]);
  const [vacinas, setVacinas] = useState([]);

  const [warningMessage, setWarningMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);
  const [typeWarning, setTypeWarning] = useState("info");
  const [openDecision, setOpenDecision] = useState(false);
  const [titleDecision, setTitleDecision] = useState("");
  const [descriptionDecision, setDescriptionDecision] = useState("");
  const [handleConfirmDecision, setHandleConfirmDecision] = useState(() => {});

  const [vacina, setVacina] = useState({
    nome: "",
    descricao: "",
  });

  const [remedio, setRemedio] = useState({
    nome: "",
    descricao: "",
  });

  function handleWarning(message, type) {
    setOpenWarning(true);
    setWarningMessage(message);
    setTypeWarning(type);
  }

  function onCloseWarning() {
    setOpenWarning(false);
  }

  function handleNotSure() {
    setOpenDecision(false);
  }

  const createRemedio = async () => {
    if (!remedio.nome)
      return handleWarning("Nome do remédio não pode ser vazio", "error");
    if (!remedio.descricao)
      return handleWarning("Descrição do remédio não pode ser vazio", "error");
    const response = await medicamentoAPI.registerRemedio(remedio);
    let newRemedios = remedios;
    newRemedios.push(response.data);
    setRemedios(newRemedios);
    handleWarning("Remedio cadastrado com sucesso", "success");
    setRemedio({ nome: "", descricao: "" });
  };

  const createVacina = async () => {
    if (!vacina.nome)
      return handleWarning("Nome da vacina não pode ser vazio", "error");
    if (!vacina.descricao)
      return handleWarning("Descrição do vacina não pode ser vazio", "error");
    const response = await medicamentoAPI.registerVacina(vacina);
    let newVacinas = vacinas;
    newVacinas.push(response.data);
    setVacinas(newVacinas);
    handleWarning("Vacina cadastrado com sucesso", "success");
    setVacina({ nome: "", descricao: "" });
  };

  function handleChangeDecision(title, description, type) {
    setTitleDecision(title);
    setDescriptionDecision(description);
    setOpenDecision(true);
    setHandleConfirmDecision(() =>
      type === "Remedio" ? createRemedio : createVacina
    );
  }

  return (
    <>
      <Header></Header>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography style={{ marginBottom: 32 }} variant="h5">
          Gerenciar medicamentos
        </Typography>
      </Grid>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Card
            style={{
              padding: 16,
              width: "80%",
              marginBottom: 16,
            }}
          >
            <Typography variant="h6">Remedio</Typography>

            <TextField
              required
              id="outlined-required"
              label="Nome"
              variant="outlined"
              margin="dense"
              fullWidth
              style={{ marginBottom: 8 }}
              value={remedio.nome}
              onChange={(event) =>
                setRemedio({ ...remedio, nome: event.target.value })
              }
            />
            <TextField
              required
              id="outlined-required"
              label="Descrição"
              variant="outlined"
              margin="dense"
              fullWidth
              style={{ marginBottom: 8 }}
              value={remedio.descricao}
              onChange={(event) =>
                setRemedio({ ...remedio, descricao: event.target.value })
              }
            />
            <Button
              style={{ marginTop: 8 }}
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                handleChangeDecision(
                  "Criar remédio",
                  "Ao confirmar, você estará criando um novo remédio no sistema. Deseja continuar?",
                  "Remedio"
                );
              }}
            >
              Cadastrar
            </Button>
          </Card>

          <Card
            style={{
              padding: 16,
              width: "80%",
              marginBottom: 16,
            }}
          >
            <Typography variant="h6">Remédios cadastradas</Typography>

            {remedios.map((remedio) => (
              <Typography>
                <span style={{ fontWeight: "600" }}>{remedio.nome}:</span>{" "}
                {remedio.descricao}
              </Typography>
            ))}
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Card
            style={{
              padding: 16,
              width: "80%",
              marginBottom: 16,
            }}
          >
            <Typography variant="h6">Vacina</Typography>
            <TextField
              required
              id="outlined-required"
              label="Nome"
              variant="outlined"
              margin="dense"
              fullWidth
              style={{ marginBottom: 8 }}
              value={vacina.nome}
              onChange={(event) =>
                setVacina({ ...vacina, nome: event.target.value })
              }
            />
            <TextField
              required
              id="outlined-required"
              label="Descrição"
              variant="outlined"
              margin="dense"
              fullWidth
              style={{ marginBottom: 8 }}
              value={vacina.descricao}
              onChange={(event) =>
                setVacina({ ...vacina, descricao: event.target.value })
              }
            />
            <Button
              style={{ marginTop: 8 }}
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                handleChangeDecision(
                  "Criar remédio",
                  "Ao confirmar, você estará criando uma nova vacina no sistema. Deseja continuar?",
                  "Vacina"
                );
              }}
            >
              Cadastrar
            </Button>
          </Card>
          <Card
            style={{
              padding: 16,
              width: "80%",
            }}
          >
            <Typography variant="h6">Vacinas cadastradas</Typography>

            {vacinas.map((vacina) => (
              <Typography>
                <span style={{ fontWeight: "600" }}>{vacina.nome}:</span>{" "}
                {vacina.descricao}{" "}
              </Typography>
            ))}
          </Card>
        </div>
      </div>
      {openDecision && (
        <Decision
          open={openDecision}
          handleConfirm={handleConfirmDecision}
          notSure={handleNotSure}
          title={titleDecision}
          description={descriptionDecision}
        />
      )}
      {openWarning && (
        <Warning
          message={warningMessage}
          open={openWarning}
          typeMessage={typeWarning}
          onClose={onCloseWarning}
        />
      )}
    </>
  );
}

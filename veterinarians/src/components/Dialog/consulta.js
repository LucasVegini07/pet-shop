import React, { useState, useEffect } from "react";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@material-ui/core";
import Decision from "../Decision";
import Warning from "../Warning";
import * as medicamentoAPI from "../../util/API/medicamentoAPI";
import * as consultaAPI from "../../util/API/consultaAPI";

export default function PetServices(props) {
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

  const [remedio, setRemedio] = useState("");
  const [vacina, setVacina] = useState("");
  const [descricao, setDescricao] = useState("");

  const [warningMessage, setWarningMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);
  const [typeWarning, setTypeWarning] = useState("info");
  const [openDecision, setOpenDecision] = useState(false);
  const [titleDecision, setTitleDecision] = useState("");
  const [descriptionDecision, setDescriptionDecision] = useState("");
  const [handleConfirmDecision, setHandleConfirmDecision] = useState(() => {});

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

  function handleChangeDecision(title, description, type) {
    setTitleDecision(title);
    setDescriptionDecision(description);
    setOpenDecision(true);
    setHandleConfirmDecision(() => FinalizaConsulta);
  }

  async function FinalizaConsulta() {
    if (!descricao)
      return handleWarning("Descrição não pode estar vazia", "error");

    const response = await consultaAPI.finalizaConsulta(
      remedio,
      vacina,
      descricao,
      props.consulta.id
    );

    handleWarning("Consulta finalizada com sucesso", "success");

    setTimeout(() => {
      props.fetchData();
      props.onClose();
    }, 2000);
  }

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        keepMounted
        fullWidth
      >
        <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
          Consulta
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                id="outlined-required"
                select
                label="Remedio"
                variant="outlined"
                margin="dense"
                fullWidth
                value={remedio}
                onChange={(event) => setRemedio(event.target.value)}
              >
                {remedios.map((remedio) => (
                  <MenuItem key={remedio} value={remedio.nome}>
                    {remedio.nome}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-required"
                label="Vacina"
                select
                variant="outlined"
                margin="dense"
                fullWidth
                value={vacina}
                onChange={(event) => setVacina(event.target.value)}
              >
                {vacinas.map((vacina) => (
                  <MenuItem key={vacina} value={vacina.nome}>
                    {vacina.nome}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                multiline
                rows="3"
                id="outlined-required"
                label="Descrição"
                variant="outlined"
                margin="dense"
                fullWidth
                onChange={(event) => setDescricao(event.target.value)}
                value={descricao}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Button
                onClick={props.onClose}
                color="primary"
                variant="contained"
              >
                Voltar
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                onClick={() =>
                  handleChangeDecision(
                    "Finalizar consulta",
                    "Ao confirmar, você estará finalizando essa consulta. Deseja continuar?"
                  )
                }
              >
                Finalizar
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
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

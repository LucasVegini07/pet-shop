import React, { useState } from "react";
import moment from "moment";
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
import history from "../../history";
import InputMask from "react-input-mask";
import validator from "validator";

import * as consultaAPI from "../../util/API/consultaAPI";
import * as servicoAPI from "../../util/API/servicoAPI";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

export default function EditEmployee(props) {
  const [warningMessage, setWarningMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);
  const [typeWarning, setTypeWarning] = useState("info");
  const [openDecision, setOpenDecision] = useState(false);
  const [titleDecision, setTitleDecision] = useState("");
  const [descriptionDecision, setDescriptionDecision] = useState("");
  const [handleConfirmDecision, setHandleConfirmDecision] = useState(() => {});

  const [consulta, setConsulta] = useState({
    data: new Date(),
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

  function handleChangeDecision(title, description, type) {
    setTitleDecision(title);
    setDescriptionDecision(description);
    setOpenDecision(true);
    setHandleConfirmDecision(() => createConsulta);
  }

  const handleDateChange = (date) => {
    setConsulta({ ...consulta, data: date });
  };

  const createConsulta = async () => {
    if (props.serviceNome === "Veterinário")
      await consultaAPI.registerConsulta(consulta, props.petId);
    else await servicoAPI.registerService(consulta, props.petId);

    handleWarning("Serviço criado com sucesso!", "success");

    setTimeout(() => {
      props.onClose();
    }, 3000);
  };

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
          {props.serviceNome}
        </DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justifyContent="space-around" spacing={2}>
                <KeyboardDatePicker
                  margin="normal"
                  fullWidth
                  id="date-picker-dialog"
                  label="Data"
                  format="dd/MM/yyyy"
                  value={consulta.data}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Horario"
                  fullWidth
                  value={consulta.data}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
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
                color="primary"
                variant="contained"
                onClick={() => props.onClose()}
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
                    "Criar consulta veterinária",
                    "Ao confirmar, você estará criando uma consulta veterinária no sistema. Deseja continuar?"
                  )
                }
              >
                Criar
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

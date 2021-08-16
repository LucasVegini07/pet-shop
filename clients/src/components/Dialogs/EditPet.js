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

import * as consultaAPI from "../../util/API/consultaAPI";

export default function EditPet(props) {
  const [warningMessage, setWarningMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);
  const [typeWarning, setTypeWarning] = useState("info");
  const [openDecision, setOpenDecision] = useState(false);
  const [titleDecision, setTitleDecision] = useState("");
  const [descriptionDecision, setDescriptionDecision] = useState("");
  const [handleConfirmDecision, setHandleConfirmDecision] = useState(() => {});

  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [consulta, setConsulta] = useState({
    horaInicio: new Date(),
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
    setConsulta({ ...consulta, horaInicio: date });
  };

  const createConsulta = async () => {
    const response = await consultaAPI.registerConsulta(consulta);

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
          Banho e tosa
        </DialogTitle>
        <DialogContent></DialogContent>
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
                    "Editar produto",
                    "Ao confirmar, você estará editando as informações deste produto no sistema. Deseja continuar?"
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

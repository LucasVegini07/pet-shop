import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";
import Decision from "../Decision";
import Warning from "../Warning";

import * as consultaAPI from "../../util/API/consultaAPI";
import * as servicoAPI from "../../util/API/servicoAPI";

export default function PetServices(props) {
  useEffect(() => {
    console.log("Props: ", props);
    async function fetchData() {
      let response;
      if (props.serviceNome === "Veterinário") {
        response = await consultaAPI.getConsultas(props.petId);
      } else {
        response = await servicoAPI.getServices(props.petId);
      }
      setServices(response.data);
    }
    moment.locale("pt-br");
    fetchData();
  }, []);

  const [warningMessage, setWarningMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);
  const [typeWarning, setTypeWarning] = useState("info");
  const [openDecision, setOpenDecision] = useState(false);
  const [titleDecision, setTitleDecision] = useState("");
  const [descriptionDecision, setDescriptionDecision] = useState("");
  const [handleConfirmDecision, setHandleConfirmDecision] = useState(() => {});

  const [services, setServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

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
    setHandleConfirmDecision(() => null);
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
          Serviço
        </DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              maxHeight: "40vh",
              overflow: "auto",
            }}
          >
            {props.serviceNome !== "Veterinário" &&
              services &&
              services.map((service) => (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    marginBottom: 8,
                    borderColor: moment(service.data)
                      .subtract(3, "hours")
                      .isBefore(moment())
                      ? "#52C41A"
                      : "#FAAD14",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 5,
                    borderStyle: "solid",
                  }}
                >
                  <div>{props.serviceNome}</div>
                  <div>
                    {moment(service.data).subtract(3, "hours").format("lll")}
                  </div>
                </div>
              ))}
            {console.log("Services: ", services)}
            {props.serviceNome === "Veterinário" &&
              services &&
              services.map((service) => (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    marginBottom: 8,
                    borderColor: service.finalizada ? "#52C41A" : "#FAAD14",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 5,
                    borderStyle: "solid",
                  }}
                >
                  <div>{props.serviceNome}</div>
                  <div>
                    {moment(service.data).subtract(3, "hours").format("lll")}
                  </div>
                </div>
              ))}
            {services.length < 1 && (
              <Typography>Você ainda não criou nenhum serviço</Typography>
            )}
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

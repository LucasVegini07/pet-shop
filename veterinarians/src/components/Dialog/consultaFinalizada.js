import React, { useState, useEffect } from "react";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";

export default function PetServices(props) {
  console.log("Pros: ", props);

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
          Consulta finalizada
        </DialogTitle>
        <DialogContent>
          <Grid container direction="column" spacing={1}>
            {props.consulta.remedio && (
              <Typography variant="h6">
                <span style={{ fontWeight: "700" }}> Remédio: </span>{" "}
                {props.consulta.remedio.nome}
              </Typography>
            )}
            {props.consulta.vacina && (
              <Typography variant="h6">
                <span style={{ fontWeight: "700" }}> Vacina: </span>{" "}
                {props.consulta.remedio.nome}
              </Typography>
            )}
            {props.consulta.descricao && (
              <Typography variant="h6">
                <span style={{ fontWeight: "700" }}> Descrição: </span>{" "}
                {props.consulta.descricao}
              </Typography>
            )}
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
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
}

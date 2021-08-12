import React, { useState } from "react";
import { Typography, TextField, Button, Grid } from "@material-ui/core";

export default function Register() {
  const [warningMessage, setWarningMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);
  const [typeWarning, setTypeWarning] = useState("info");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  function handleWarning(message, type) {
    setOpenWarning(true);
    setWarningMessage(message);
    setTypeWarning(type);
  }

  function onCloseWarning() {
    setOpenWarning(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "flex-start",
        padding: 16,
      }}
    >
      <Typography
        variant="h5"
        style={{ fontWeight: 600, marginBottom: 64 }}
        bold
      >
        CRIAR CONTA
      </Typography>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          style={{ width: "100%" }}
          variant="outlined"
          label="Nome"
          margin="dense"
          fullWidth
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <TextField
          style={{ width: "100%" }}
          variant="outlined"
          label="E-mail"
          margin="dense"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          style={{ width: "100%" }}
          variant="outlined"
          label="Senha"
          margin="dense"
          fullWidth
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <TextField
          style={{ width: "100%" }}
          variant="outlined"
          label="Confirmar senha"
          margin="dense"
          fullWidth
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          // onClick={login}
        >
          Criar
        </Button>
      </div>
    </div>
  );
}

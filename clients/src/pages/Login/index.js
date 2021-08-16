import React, { useState } from "react";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import * as userApi from "../../util/API/userAPI";
import Warning from "../../components/Warning";
import history from "../../history";
import LogoFarmacia from "../../Assets/Imagem.png";

export default function Login() {
  const [warningMessage, setWarningMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);
  const [typeWarning, setTypeWarning] = useState("info");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleWarning(message, type) {
    setOpenWarning(true);
    setWarningMessage(message);
    setTypeWarning(type);
  }

  function onCloseWarning() {
    setOpenWarning(false);
  }

  async function login() {
    if (!email) return handleWarning("E-mail não pode ser vazio!", "error");
    if (!senha) return handleWarning("Senha não pode ser vazio!", "error");

    const response = await userApi.login(email, senha);

    if (!response.data)
      return handleWarning("E-mail e/ou senha inválido!", "error");

    localStorage.setItem("id_cliente", response.data);

    handleWarning("Autenticado!", "success");

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
        justifyContent: "space-around",
        padding: 16,
      }}
    >
      <img
        src={LogoFarmacia}
        alt={"Simbolo do pet"}
        style={{ maxWidth: 100 }}
      ></img>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "60%",
        }}
      >
        <Typography
          variant="h5"
          style={{
            fontWeight: 600,
            color: "#903DF4",
            textAlign: "justify",
            marginBottom: 16,
          }}
        >
          Projeto Integrador II
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontWeight: 600,
            color: "#903DF4",
            textAlign: "justify",
          }}
        >
          Afonso Uéslei Böing
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontWeight: 600,
            color: "#903DF4",
            textAlign: "justify",
          }}
        >
          Lucas Ramthum Vegini
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "60%",
        }}
      >
        <TextField
          variant="outlined"
          id="outlined-required"
          label="E-mail"
          margin="dense"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="outlined-required"
          label="Senha"
          variant="outlined"
          margin="dense"
          type="password"
          fullWidth
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <Button
          style={{ marginTop: 6 }}
          variant="contained"
          color="primary"
          fullWidth
          onClick={login}
        >
          Entrar
        </Button>
      </div>
      <Button
        variant="text"
        color="primary"
        onClick={() => history.push("/register")}
        style={{ marginTop: 24 }}
      >
        Não tem conta? Cadastre-se
      </Button>
      {openWarning && (
        <Warning
          message={warningMessage}
          open={openWarning}
          typeMessage={typeWarning}
          onClose={onCloseWarning}
        />
      )}
    </div>
  );
}

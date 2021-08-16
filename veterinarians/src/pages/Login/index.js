import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Grid, Paper } from "@material-ui/core";
import * as veterinarioAPI from "../../util/API/veterinarioAPI";
import Warning from "../../components/Warning";
import history from "../../history";
import LogoFarmacia from "../../Assets/Imagem.png";

export default function Login(props) {
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

  async function login() {
    if (!email) return handleWarning("E-mail não pode ser vazio!", "error");
    if (!senha) return handleWarning("Senha não pode ser vazio!", "error");

    const response = await veterinarioAPI.login(email, senha);

    console.log("Response: ", response);

    if (!response.data)
      return handleWarning("E-mail e/ou senha inválido!", "error");

    localStorage.setItem("id_cliente", response.data);

    handleWarning("Autenticado!", "success");

    setTimeout(() => {
      history.push("/home");
    }, 3000);
  }

  function onCloseWarning() {
    setOpenWarning(false);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "30%",
          height: "70%",
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <img
          src={LogoFarmacia}
          alt={"Simbolo do pet"}
          style={{ maxWidth: 100, marginTop: 16, marginBottom: 16 }}
        ></img>
        <Typography
          variant="h5"
          style={{
            fontWeight: 600,
            textAlign: "justify",
            color: "#903DF4",
            marginBottom: 16,
          }}
        >
          Projeto Integrador II
        </Typography>
        <Typography
          style={{
            fontWeight: 600,
            textAlign: "justify",
            color: "#903DF4",
            marginBottom: 16,
          }}
          bold
        >
          **Sistema exclusivo para veterinários**
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "60%",
            marginTop: 16,
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
      </div>
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

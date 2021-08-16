import React, { useState } from "react";

import Warning from "../../components/Warning";
import Decision from "../../components/Decision";
import * as userAPI from "../../util/API/userAPI";
import history from "../../history";
import { Typography, TextField, Button, Grid } from "@material-ui/core";

export default function Register() {
  const [warningMessage, setWarningMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);
  const [typeWarning, setTypeWarning] = useState("info");
  const [openDecision, setOpenDecision] = useState(false);
  const [titleDecision, setTitleDecision] = useState("");
  const [descriptionDecision, setDescriptionDecision] = useState("");
  const [handleConfirmDecision, setHandleConfirmDecision] = useState(() => {});

  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [cliente, setCliente] = useState({
    nome: "",
    apelido: "",
    cpf: "",
    email: "",
    escopo: "Cliente",
    senha: "",
    pontos: 0,
  });

  const [confirmSenha, setConfirmSenha] = useState("");

  function handleNotSure() {
    setOpenDecision(false);
  }

  function handleChangeDecision(title, description) {
    setTitleDecision(title);
    setDescriptionDecision(description);
    setOpenDecision(true);
    setHandleConfirmDecision(() => RegisterClient);
  }

  function handleWarning(message, type) {
    setOpenWarning(true);
    setWarningMessage(message);
    setTypeWarning(type);
  }

  function onCloseWarning() {
    setOpenWarning(false);
  }

  async function RegisterClient() {
    if (!cliente.nome)
      return handleWarning("Nome não pode ser vazio!", "error");
    if (!cliente.cpf) return handleWarning("CPF não pode ser vazio!", "error");

    if (!cliente.apelido)
      return handleWarning("Apelido não pode ser vazio!", "error");

    if (!cliente.email)
      return handleWarning("E-mail não pode ser vazio!", "error");

    if (!cliente.senha)
      return handleWarning("Senha não pode ser vazio!", "error");

    if (!confirmSenha)
      return handleWarning("Confirmar senha não pode ser vazio!", "error");

    if (cliente.senha !== confirmSenha)
      return handleWarning("Senhas devem ser iguais!", "error");

    const response = await userAPI.registerCliente(cliente);
    if (response.erro === true) return handleWarning(response.message, "error");
    handleWarning("Cadastro feito com sucesso", "success");

    setTimeout(() => {
      history.push("/login");
    }, 3000);
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
        style={{ fontWeight: 600, marginBottom: 48 }}
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
          label="Nome completo"
          margin="dense"
          fullWidth
          value={cliente.nome}
          onChange={(event) =>
            setCliente({ ...cliente, nome: event.target.value })
          }
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextField
            style={{ width: "100%", flex: 1, marginRight: 5 }}
            variant="outlined"
            label="CPF"
            margin="dense"
            fullWidth
            value={cliente.cpf}
            onChange={(event) =>
              setCliente({ ...cliente, cpf: event.target.value })
            }
          />
          <TextField
            style={{ width: "100%", flex: 1, marginLeft: 5 }}
            variant="outlined"
            label="Apelido"
            margin="dense"
            fullWidth
            value={cliente.apelido}
            onChange={(event) =>
              setCliente({ ...cliente, apelido: event.target.value })
            }
          />
        </div>
        <TextField
          style={{ width: "100%" }}
          variant="outlined"
          label="E-mail"
          margin="dense"
          fullWidth
          value={cliente.email}
          onChange={(event) =>
            setCliente({ ...cliente, email: event.target.value })
          }
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextField
            style={{ width: "100%", flex: 1, marginRight: 5 }}
            variant="outlined"
            label="Senha"
            margin="dense"
            fullWidth
            type="password"
            value={cliente.senha}
            onChange={(event) =>
              setCliente({ ...cliente, senha: event.target.value })
            }
          />
          <TextField
            style={{ width: "100%", flex: 1, marginLeft: 5 }}
            variant="outlined"
            label="Confirmar senha"
            type="password"
            margin="dense"
            fullWidth
            value={confirmSenha}
            onChange={(event) => setConfirmSenha(event.target.value)}
          />
        </div>
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
          onClick={() =>
            handleChangeDecision(
              "Cadastro",
              "Atenção! Você está se cadastrando no sistema, desaja continuar?"
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

import React, { useState } from "react";

import Warning from "../../components/Warning";
import Decision from "../../components/Decision";
import * as userAPI from "../../util/API/veterinarioAPI";
import history from "../../history";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import LogoFarmacia from "../../Assets/Imagem.png";

export default function Register() {
  const [warningMessage, setWarningMessage] = useState("");
  const [openWarning, setOpenWarning] = useState(false);
  const [typeWarning, setTypeWarning] = useState("info");
  const [openDecision, setOpenDecision] = useState(false);
  const [titleDecision, setTitleDecision] = useState("");
  const [descriptionDecision, setDescriptionDecision] = useState("");
  const [handleConfirmDecision, setHandleConfirmDecision] = useState(() => {});

  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [veterinario, setVeterinario] = useState({
    nome: "",
    apelido: "",
    cpf: "",
    email: "",
    escopo: "Veterinário",
    senha: "",
    ativo: true,
    crmv: "",
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
    if (!veterinario.nome)
      return handleWarning("Nome não pode ser vazio!", "error");
    if (!veterinario.cpf)
      return handleWarning("CPF não pode ser vazio!", "error");

    if (!veterinario.apelido)
      return handleWarning("Apelido não pode ser vazio!", "error");

    if (!veterinario.email)
      return handleWarning("E-mail não pode ser vazio!", "error");

    if (!veterinario.crmv)
      return handleWarning("CRMV não pode ser vazio!", "error");

    if (!veterinario.senha)
      return handleWarning("Senha não pode ser vazio!", "error");

    if (!confirmSenha)
      return handleWarning("Confirmar senha não pode ser vazio!", "error");

    if (veterinario.senha !== confirmSenha)
      return handleWarning("Senhas devem ser iguais!", "error");

    const response = await userAPI.registerFuncionario(veterinario);
    // if (response.erro === true) return handleWarning(response.message, "error");
    // handleWarning("Cadastro feito com sucesso", "success");

    // setTimeout(() => {
    //   history.push("/login");
    // }, 3000);
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
          height: "80%",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <img
          src={LogoFarmacia}
          alt={"Simbolo do pet"}
          style={{ maxWidth: 100 }}
        ></img>
        <Typography variant="h5" style={{ fontWeight: 600 }} bold>
          CADASTRE-SE
        </Typography>
        <div
          style={{
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
            value={veterinario.nome}
            onChange={(event) =>
              setVeterinario({ ...veterinario, nome: event.target.value })
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
              value={veterinario.cpf}
              onChange={(event) =>
                setVeterinario({ ...veterinario, cpf: event.target.value })
              }
            />
            <TextField
              style={{ width: "100%", flex: 1, marginLeft: 5 }}
              variant="outlined"
              label="Apelido"
              margin="dense"
              fullWidth
              value={veterinario.apelido}
              onChange={(event) =>
                setVeterinario({ ...veterinario, apelido: event.target.value })
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextField
              style={{ width: "100%", flex: 1, marginRight: 5 }}
              variant="outlined"
              label="E-mail"
              margin="dense"
              fullWidth
              value={veterinario.email}
              onChange={(event) =>
                setVeterinario({ ...veterinario, email: event.target.value })
              }
            />
            <TextField
              style={{ width: "100%", flex: 1, marginLeft: 5 }}
              variant="outlined"
              label="CRMV"
              margin="dense"
              fullWidth
              value={veterinario.crmv}
              onChange={(event) =>
                setVeterinario({ ...veterinario, crmv: event.target.value })
              }
            />
          </div>
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
              value={veterinario.senha}
              onChange={(event) =>
                setVeterinario({ ...veterinario, senha: event.target.value })
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
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() =>
            handleChangeDecision(
              "Cadastro",
              "Atenção! Você está se cadastrando no sistema, desaja continuar?"
            )
          }
        >
          Criar
        </Button>
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
    </div>
  );
}

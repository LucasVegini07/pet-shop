import React, { useState, useEffect } from "react";
import { Typography, ButtonBase, IconButton, Icon } from "@material-ui/core";
import { Add, ArrowForward, ArrowBack, ExitToApp } from "@material-ui/icons";
import * as animalAPI from "../../util/API/animalAPI";
import Avatar from "@material-ui/core/Avatar";
import history from "../../history";
export default function Home() {
  useEffect(() => {
    async function fetchData() {
      const response = await animalAPI.getPets();
      setPets(response.data);
    }
    fetchData();
  }, []);

  const [pets, setPets] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#903DF4",
          justifyContent: "space-between",
          width: "100%",
          color: "#fff",
          marginBottom: 24,
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontWeight: 500,
            textAlign: "justify",
            justifyContent: "center",
            marginLeft: 16,
            padding: 16,
          }}
        >
          Meus pets
        </Typography>{" "}
        <IconButton
          style={{ marginRight: 16 }}
          onClick={() => history.push("/login")}
        >
          <ExitToApp style={{ color: "#fff" }}></ExitToApp>
        </IconButton>{" "}
      </div>

      {pets &&
        pets.map((pet) => (
          <>
            <ButtonBase
              onClick={() => history.push(`/pet/${pet.id}`)}
              style={{ width: "90%" }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  height: "10vh",
                  justifyContent: "space-between",
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 15,
                  borderStyle: "solid",
                  borderColor: "#D3D3D3",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Avatar style={{ backgroundColor: "#903DF4" }}>
                    {pet.nome[0]}
                  </Avatar>
                  <Typography style={{ marginLeft: 16 }}>{pet.nome}</Typography>
                </div>
                <IconButton>
                  <ArrowForward style={{ color: "#903DF4" }}></ArrowForward>
                </IconButton>{" "}
              </div>
            </ButtonBase>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: 600,
                width: "80%",
                textAlign: "center",
                marginTop: 64,
              }}
            >
              Para cadastrar um pet, clique no botão "+", no canto inferior da
              tela
            </Typography>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                style={{ backgroundColor: "#903DF4", marginBottom: 5 }}
              >
                <Add style={{ color: "#fff" }} fontSize="large"></Add>
              </IconButton>
            </div>
          </>
        ))}
      {pets.length < 1 && (
        <>
          <Typography
            variant="h6"
            style={{
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Nenhum pet encontrado
          </Typography>

          <Typography
            variant="subtitle1"
            style={{
              fontWeight: 600,
              width: "80%",
              textAlign: "center",
              marginTop: 64,
            }}
          >
            Para cadastrar um pet, clique no botão "+", no canto inferior da
            tela
          </Typography>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              onClick={() => history.push("/petRegister")}
              style={{ backgroundColor: "#903DF4", marginBottom: 5 }}
            >
              <Add style={{ color: "#fff" }} fontSize="large"></Add>
            </IconButton>
          </div>
        </>
      )}
    </div>
  );
}

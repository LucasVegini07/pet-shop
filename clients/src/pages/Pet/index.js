import React, { useState, useEffect } from "react";
import moment from "moment";
import { Typography, ButtonBase, Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import Warning from "../../components/Warning";
import Decision from "../../components/Decision";
import InputMask from "react-input-mask";
import * as animalAPI from "../../util/API/animalAPI";
import history from "../../history";
import DialogOpenService from "../../components/Dialogs/OpenService";
import DialogPetServices from "../../components/Dialogs/PetServices";
import DialogEditPet from "../../components/Dialogs/EditPet";

export default function PetRegister(props) {
  useEffect(() => {
    async function fetchData() {
      const response = await animalAPI.getPetById(
        props.match.url.split("/")[2]
      );
      console.log("Respose: ", response.data);
      setPet(response.data);
    }

    fetchData();
  }, []);

  const [openPetService, setOpenPetService] = useState(false);
  const [openOpenService, setOpenOpenService] = useState(false);
  const [editPet, setEditPet] = useState(false);

  const [pet, setPet] = useState({});

  const [serviceNome, setServiceNome] = useState("");

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
          width: "100%",
          color: "#fff",
        }}
      >
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack style={{ color: "#fff" }}></ArrowBack>
        </IconButton>
        <Typography
          variant="h6"
          style={{
            fontWeight: 500,
            textAlign: "justify",
            justifyContent: "center",
            padding: 16,
          }}
        >
          Serviços
        </Typography>{" "}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "10vh",
          justifyContent: "flex-start",
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
          borderStyle: "solid",
          borderColor: "#D3D3D3",
        }}
      >
        {pet.nome && (
          <>
            <Avatar style={{ backgroundColor: "#903DF4", marginLeft: 12 }}>
              {pet.nome[0]}
            </Avatar>
            <Typography
              style={{ marginLeft: 16, fontWeight: 600, fontSize: 18 }}
            >
              O que {pet.nome} precisa ?
            </Typography>
          </>
        )}
      </div>

      <ButtonBase
        onClick={() => {
          setServiceNome("Banho e Tosa");
          setOpenOpenService(true);
        }}
        style={{ width: "100%" }}
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
            padding: 5,
            borderStyle: "solid",
            borderColor: "#D3D3D3",
          }}
        >
          <Typography style={{ marginLeft: 16, fontWeight: 600 }} bold>
            Banho e Tosa
          </Typography>
          <IconButton>
            <ArrowForward style={{ color: "#903DF4" }}></ArrowForward>
          </IconButton>{" "}
        </div>
      </ButtonBase>
      <ButtonBase
        onClick={() => {
          setServiceNome("Veterinário");
          setOpenOpenService(true);
        }}
        style={{ width: "100%" }}
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
            padding: 5,
            borderStyle: "solid",
            borderColor: "#D3D3D3",
          }}
        >
          <Typography style={{ marginLeft: 16, fontWeight: 600 }} bold>
            Veterinário
          </Typography>
          <IconButton>
            <ArrowForward style={{ color: "#903DF4" }}></ArrowForward>
          </IconButton>{" "}
        </div>
      </ButtonBase>
      <ButtonBase
        onClick={() => {
          setOpenPetService(true);
          setServiceNome("Veterinário");
        }}
        style={{ width: "100%" }}
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
            padding: 5,
            borderStyle: "solid",
            borderColor: "#D3D3D3",
          }}
        >
          <Typography style={{ marginLeft: 16, fontWeight: 600 }} bold>
            Informações sobre serviços (Veterinário)
          </Typography>
          <IconButton>
            <ArrowForward style={{ color: "#903DF4" }}></ArrowForward>
          </IconButton>{" "}
        </div>
      </ButtonBase>
      <ButtonBase
        onClick={() => {
          setOpenPetService(true);
          setServiceNome("Banho e tosa");
        }}
        style={{ width: "100%" }}
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
            padding: 5,
            borderStyle: "solid",
            borderColor: "#D3D3D3",
          }}
        >
          <Typography style={{ marginLeft: 16, fontWeight: 600 }} bold>
            Informações sobre serviços (Banho e tosa)
          </Typography>
          <IconButton>
            <ArrowForward style={{ color: "#903DF4" }}></ArrowForward>
          </IconButton>{" "}
        </div>
      </ButtonBase>

      {openPetService && (
        <DialogPetServices
          open={openPetService}
          serviceNome={serviceNome}
          onClose={() => setOpenPetService(false)}
          petId={pet.id}
        ></DialogPetServices>
      )}

      {openOpenService && (
        <DialogOpenService
          serviceNome={serviceNome}
          open={openOpenService}
          onClose={() => setOpenOpenService(false)}
          petId={pet.id}
        ></DialogOpenService>
      )}

      {editPet && (
        <DialogEditPet
          open={editPet}
          onClose={() => setEditPet(false)}
          petId={pet.id}
        ></DialogEditPet>
      )}
    </div>
  );
}

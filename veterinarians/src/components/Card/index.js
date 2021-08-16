import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Typography } from "@material-ui/core";
import moment from "moment";
import "moment/locale/pt-br";
import OpenConsulta from "../Dialog/consulta";
import OpenConsultaFinalizada from "../Dialog/consultaFinalizada";

export default function CardConsulta(props) {
  moment.locale("pt-br");

  const [open, setOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);

  return (
    <div
      style={{
        width: "80%",
        height: "8vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#903DF4",
        borderStyle: "solid",
        margin: 8,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button
          onClick={() =>
            props.dialog === "primary" ? setOpen(true) : setSecondOpen(true)
          }
          color="primary"
        >
          Abrir
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          style={{
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Data e Hora
          <Typography
            style={{
              textAlign: "center",
            }}
          >
            {moment(props.consulta.data).subtract(3, "hours").format("lll")}
          </Typography>
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          style={{
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Cliente
          <Typography
            style={{
              textAlign: "center",
            }}
          >
            {props.consulta.cliente.apelido}
          </Typography>
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          style={{
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Espécie
          <Typography
            style={{
              textAlign: "center",
            }}
          >
            {props.consulta.animal.especie}
          </Typography>
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          style={{
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Raça
          <Typography
            style={{
              textAlign: "center",
            }}
          >
            {props.consulta.animal.raca}
          </Typography>
        </Typography>
      </div>
      {open && (
        <OpenConsulta
          open={open}
          fetchData={props.fetchData}
          consulta={props.consulta}
          onClose={() => setOpen(false)}
        ></OpenConsulta>
      )}

      {secondOpen && (
        <OpenConsultaFinalizada
          consulta={props.consulta}
          open={secondOpen}
          onClose={() => setSecondOpen(false)}
        ></OpenConsultaFinalizada>
      )}
    </div>
  );
}

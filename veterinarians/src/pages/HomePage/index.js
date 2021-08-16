import React, { useState, useEffect } from "react";
import Header from "../../components/AppBar";
import ConsultaCard from "../../components/Card";
import * as consultaAPI from "../../util/API/consultaAPI";

import { AppBar, Tabs, Tab } from "@material-ui/core";

export default function Home() {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await consultaAPI.getConsultas();
    setConsultas(response.data);
  }

  const [consultas, setConsultas] = useState([]);

  function onChangeAppBar(event, value) {
    setValue(value);
  }

  const [value, setValue] = useState(0);

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
      <Header></Header>
      <AppBar
        position="static"
        color="default"
        style={{ zIndex: 1, width: "80%" }}
      >
        <Tabs
          value={value}
          onChange={onChangeAppBar}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Consultas ativas" />
          <Tab label="Histórico de consultas" />
        </Tabs>
      </AppBar>
      {value === 0 &&
        consultas.map(
          (consulta) =>
            !consulta.finalizada && (
              <ConsultaCard
                dialog={"primary"}
                fetchData={fetchData}
                consulta={consulta}
              ></ConsultaCard>
            )
        )}
      {value === 1 &&
        consultas.map(
          (consulta) =>
            consulta.finalizada && (
              <ConsultaCard
                dialog={"second"}
                consulta={consulta}
              ></ConsultaCard>
            )
        )}
    </div>
  );
}

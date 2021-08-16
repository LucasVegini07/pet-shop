package petshop.PetShop.modulos.consulta.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import petshop.PetShop.modulos.animal.model.animal;
import petshop.PetShop.modulos.consulta.model.consulta;
import petshop.PetShop.modulos.consulta.service.consultaService;
import petshop.PetShop.modulos.pessoa.model.cliente;

@RequestMapping("/api")
@Controller
public class consultaController {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    consultaService consultaService;

    @PostMapping(value = "/consulta", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> criaConsulta(
            @RequestParam(value = "consulta", required = false) String consultaString,
            @RequestParam(value = "cliente", required = false) String clienteString,
            @RequestParam(value = "animal", required = false) String animalString
    ) throws Exception {
        consulta consulta = objectMapper.readValue(consultaString, consulta.class);
        cliente cliente = objectMapper.readValue(clienteString, cliente.class);
        animal animal = objectMapper.readValue(animalString, animal.class);
        return new ResponseEntity<>(consultaService.cadastrarConsulta(consulta, cliente, animal), HttpStatus.OK);
    }

    @PostMapping(value = "/finaliza/consulta", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> criaConsulta(
            @RequestParam(value = "remedio", required = false) String remedio,
            @RequestParam(value = "vacina", required = false) String vacina,
            @RequestParam(value = "descricao", required = false) String descricao,
            @RequestParam(value = "idConsulta", required = false) String idConsulta

    ) throws Exception {
        return new ResponseEntity<>(consultaService.finaliza(remedio, vacina, descricao, idConsulta), HttpStatus.OK);
    }

    @GetMapping(value = "/consulta/{animalId}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> getContatoByNome(
            @PathVariable String animalId) {
        return new ResponseEntity<>(consultaService.getAllByAnimalId(animalId), HttpStatus.OK);
    }

    @GetMapping(value = "/consulta", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> getConsultas() {
        return new ResponseEntity<>(consultaService.getAll(), HttpStatus.OK);
    }

}

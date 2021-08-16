package petshop.PetShop.modulos.servicos.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import petshop.PetShop.modulos.animal.model.animal;
import petshop.PetShop.modulos.pessoa.model.cliente;
import petshop.PetShop.modulos.servicos.model.servico;
import petshop.PetShop.modulos.servicos.service.servicoService;

@Controller
@RequestMapping("/api")
public class servicoController {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    servicoService servicoService;

    @PostMapping(value = "/servico", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> criaConsulta(
            @RequestParam(value = "servico", required = false) String servicoString,
            @RequestParam(value = "cliente", required = false) String clienteString,
            @RequestParam(value = "animal", required = false) String animalString
    ) throws Exception {
        servico servico = objectMapper.readValue(servicoString, servico.class);
        cliente cliente = objectMapper.readValue(clienteString, cliente.class);
        animal animal = objectMapper.readValue(animalString, animal.class);
        return new ResponseEntity<>(servicoService.cadastrarService(servico, cliente, animal), HttpStatus.OK);
    }

    @GetMapping(value = "/servico/{animalId}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> getByAnimalId(
            @PathVariable String animalId) {
        return new ResponseEntity<>(servicoService.getAllByAnimalId(animalId), HttpStatus.OK);
    }

}
